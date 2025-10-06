const addNoteBtn = document.getElementById("add-note");
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Renderiza todas las notas guardadas
function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((text, index) => {
    const note = document.createElement("div");
    note.className = "note";

    const content = document.createElement("p");
    content.textContent = text;
    content.className = "note-text";

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    // Botón de editar
    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => editNote(index));

    // Botón de eliminar
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", () => deleteNote(index));

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(delBtn);

    note.appendChild(content);
    note.appendChild(btnContainer);
    notesList.appendChild(note);
  });
}

// Añade una nueva nota
function addNote() {
  const text = noteInput.value.trim();
  if (text === "") return;
  notes.push(text);
  noteInput.value = "";
  saveNotes();
  renderNotes();
}

// Elimina una nota por su índice
function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

// Edita una nota por su índice
function editNote(index) {
  const newText = prompt("Edita tu nota:", notes[index]);
  if (newText !== null && newText.trim() !== "") {
    notes[index] = newText.trim();
    saveNotes();
    renderNotes();
  }
}

// Guarda las notas en localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

addNoteBtn.addEventListener("click", addNote);
noteInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    addNote();
  }
});
renderNotes();
