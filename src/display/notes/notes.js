import "./notes.css";

function createNoteDiv(title, description, index) {
  const noteDiv = document.createElement("div");
  noteDiv.setAttribute("class", "note-div");
  noteDiv.setAttribute("id", index);

  const noteTitle = document.createElement("p");
  noteTitle.setAttribute("class", "note-title");
  noteDiv.appendChild(noteTitle);

  const noteDescription = document.createElement("p");
  noteDescription.setAttribute("class", "note-description");
  noteDiv.appendChild(noteDescription);

  noteTitle.textContent = title;
  noteDescription.textContent = description;

  return noteDiv;
}

function createNotesContainer() {
  const notesContainer = document.createElement("div");
  notesContainer.setAttribute("class", "notes-container");

  return notesContainer;
}

function appendNotesContainer(notesContainer, notesObj) {
  const notes = notesObj.getNotes();
  notes.forEach((note, index) => {
    const noteDiv = createNoteDiv(note.title, note.description, index);
    notesContainer.appendChild(noteDiv);
  });
}

function displayNotes(notesObj) {
  const notesContainer = createNotesContainer();
  appendNotesContainer(notesContainer, notesObj);

  return notesContainer;
}

export default displayNotes;
