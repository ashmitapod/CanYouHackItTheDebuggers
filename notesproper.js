document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();
    
    if (noteText) {
        const notes = getNotesFromLocalStorage();
        notes.push(noteText);
        saveNotesToLocalStorage(notes);
        noteInput.value = "";
        displayNotes();
    } else {
        alert("Please enter a note.");
    }
}

function getNotesFromLocalStorage() {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
}

function saveNotesToLocalStorage(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    displayNotes();
}

function displayNotes() {
    const notesList = document.getElementById("notes");
    notesList.innerHTML = ""; // Clear current list
    const notes = getNotesFromLocalStorage();
    
    notes.forEach((note, index) => {
        const listItem = document.createElement("li");
        
        const noteText = document.createElement("span");
        noteText.className = "note-text";
        noteText.textContent = note;
        noteText.onclick = () => enableEditing(listItem, index);

        const deleteBtn = document.createElement("button");
        
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteNote(index);


        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editNote(index);

        listItem.appendChild(noteText);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        
        notesList.appendChild(listItem);
    });
}

function deleteNote(index) {
    const notes = getNotesFromLocalStorage();
    notes.splice(index, 1);
    saveNotesToLocalStorage(notes);
    displayNotes();
}

function editNote(index) {
    const notes = getNotesFromLocalStorage();
    const newNote = prompt("Edit your note:", notes[index]);
    
    if (newNote !== null) {
        notes[index] = newNote.trim();
        saveNotesToLocalStorage(notes);
        displayNotes();
    }
}
function enableEditing(listItem, index) {
    const notes = getNotesFromLocalStorage();
    const noteText = listItem.querySelector(".note-text");

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = notes[index];
    inputField.className = "edit-input";

    inputField.onblur = () => saveEdit(listItem, index, inputField.value);

    listItem.replaceChild(inputField, noteText);
    inputField.focus();
}

function saveEdit(listItem, index, newValue) {
    const notes = getNotesFromLocalStorage();
    notes[index] = newValue.trim();
    saveNotesToLocalStorage(notes);
    displayNotes();
}