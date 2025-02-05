class Note {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class Notes {
  #notes;

  constructor() {
    this.#notes = [];
  }

  createNote(title, description) {
    return new Note(title, description);
  }

  addNote(note) {
    this.#notes.push(note);
  }

  removeNote(index) {
    this.#notes.splice(index, 1);
  }

  getNotes() {
    return this.#notes;
  }
}

export {Note, Notes};
