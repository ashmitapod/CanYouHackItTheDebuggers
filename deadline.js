document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('taskForm').addEventListener('submit', addTask);

    // Initialize the chart
    const ctx = document.getElementById('completionChart').getContext('2d');
    window.completionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [], // To be filled with task names
            datasets: [{
                label: 'Task Completion (%)',
                data: [], // To be filled with completion percentages
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});

function addTask(e) {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (!taskName || !taskDeadline) {
        alert('Please provide both task name and deadline.');
        return;
    }

    const task = {
        id: Date.now(),
        name: taskName,
        deadline: new Date(taskDeadline),
        subtasks: [],
        completionPercentage: 0,
        completionCriteria: 'hours', // Default criteria
        totalHours: 0,
        hoursWorked: 0
    };

    displayTask(task);
    updateChart();
    document.getElementById('taskForm').reset();
}

function displayTask(task) {
    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');

    const remainingTimeContainer = document.createElement('span');
    remainingTimeContainer.classList.add('remaining-time');
    updateRemainingTime(remainingTimeContainer, task.deadline);

    const intervalId = setInterval(() => {
        updateRemainingTime(remainingTimeContainer, task.deadline);
    }, 1000);

    // Dropdown for choosing completion criteria
    const completionCriteriaSelect = document.createElement('select');
    completionCriteriaSelect.innerHTML = `
        <option value="hours">Mark as done based on hours left</option>
        <option value="subtasks">Mark as done based on subtasks</option>
    `;
    completionCriteriaSelect.addEventListener('change', (e) => {
        task.completionCriteria = e.target.value;
        handleCompletionCriteriaChange(task, taskItem);
    });

    taskItem.innerHTML = `
        <div class="task-header">
            <h3>${task.name}</h3>
            <span class="completion-percentage">${task.completionPercentage}% Complete</span>
        </div>
        <div class="subtasks">
            <ul>
                <!-- Subtasks will be dynamically inserted here -->
            </ul>
        </div>
    `;

    taskItem.querySelector('.task-header').appendChild(remainingTimeContainer);
    taskItem.querySelector('.task-header').appendChild(completionCriteriaSelect);
    taskList.appendChild(taskItem);

    // Initial display of criteria-specific input
    handleCompletionCriteriaChange(task, taskItem);
}

function handleCompletionCriteriaChange(task, taskItem) {
    const taskHeader = taskItem.querySelector('.task-header');

    // Remove existing criteria-specific inputs
    const existingInput = taskHeader.querySelector('.criteria-input');
    if (existingInput) {
        taskHeader.removeChild(existingInput);
    }

    let criteriaInput;

    if (task.completionCriteria === 'hours') {
        // Input for total hours and hours worked
        criteriaInput = document.createElement('div');
        criteriaInput.classList.add('criteria-input');
        criteriaInput.innerHTML = `
            <label>Total Hours:</label>
            <input type="number" class="total-hours" placeholder="Enter total hours" min="0">
            <label>Hours Worked:</label>
            <input type="number" class="hours-worked" placeholder="Enter hours worked" min="0">
            <button class="update-task">Update</button>
        `;

        criteriaInput.querySelector('.update-task').addEventListener('click', () => {
            const totalHours = parseFloat(criteriaInput.querySelector('.total-hours').value);
            const hoursWorked = parseFloat(criteriaInput.querySelector('.hours-worked').value);

            if (isNaN(totalHours) || isNaN(hoursWorked)) {
                alert('Please enter valid numbers for total hours and hours worked.');
                return;
            }

            task.totalHours = totalHours;
            task.hoursWorked = hoursWorked;
            task.completionPercentage = (totalHours > 0) ? (hoursWorked / totalHours) * 100 : 0;

            taskItem.querySelector('.completion-percentage').innerText = `${task.completionPercentage.toFixed(2)}% Complete`;
            updateChart();
        });
    } else if (task.completionCriteria === 'subtasks') {
        // Placeholder for subtask-based completion logic
        criteriaInput = document.createElement('div');
        criteriaInput.classList.add('criteria-input');
        criteriaInput.innerHTML = `
            <p>Completion will be based on the number of completed subtasks.</p>
        `;
        // Add logic to manage subtasks and calculate completion percentage here
    }

    taskHeader.appendChild(criteriaInput);
}

function updateRemainingTime(container, deadline) {
    const now = new Date();
    const timeRemaining = deadline - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        container.innerText = `Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        container.innerText = "Time's up!";
    }
}

function updateChart() {
    const tasks = Array.from(document.querySelectorAll('#tasks li'));
    const labels = tasks.map(task => task.querySelector('h3').innerText);
    const data = tasks.map(task => parseFloat(task.querySelector('.completion-percentage').innerText));

    window.completionChart.data.labels = labels;
    window.completionChart.data.datasets[0].data = data;
    window.completionChart.update();
}