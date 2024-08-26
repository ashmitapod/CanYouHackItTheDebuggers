let stopwatchInterval;
let stopwatchSeconds = 0;
const stopwatchDisplay = document.getElementById('stopwatch-display');
const startStopwatchButton = document.getElementById('start-stopwatch');
const stopStopwatchButton = document.getElementById('stop-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');

function updateStopwatch() {
    stopwatchSeconds++;
    const hours = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchSeconds % 60).padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startStopwatchButton.addEventListener('click', () => {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    startStopwatchButton.disabled = true;
    stopStopwatchButton.disabled = false;
    resetStopwatchButton.disabled = false;
});

stopStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    startStopwatchButton.disabled = false;
    stopStopwatchButton.disabled = true;
});

resetStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = -1;
    updateStopwatch();
    startStopwatchButton.disabled = false;
    stopStopwatchButton.disabled = true;
    resetStopwatchButton.disabled = true;
});

let timerInterval;
const timerInput = document.getElementById('timer-input');
const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');

function updateTimer() {
    let seconds = parseInt(timerInput.value, 10);
    if (seconds <= 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = '00:00';
        return;
    }
    seconds--;
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const remainingSeconds = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${remainingSeconds}`;
    timerInput.value = seconds;
}

startTimerButton.addEventListener('click', () => {
    let seconds = parseInt(timerInput.value, 10);
    if (isNaN(seconds) || seconds <= 0) return;
    timerInterval = setInterval(updateTimer, 1000);
});