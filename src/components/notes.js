class Notes {
  #notes;

  constructor() {
    this.#notes = [];
  }

  createNote(title, description) {
    return { title, description };
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

export default Notes;
