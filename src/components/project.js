import Todos from "./todos";
import Notes from "./notes";

class Project {
  #todos;
  #notes;

  constructor() {
    this.#todos = new Todos();
    this.#notes = new Notes();
  }

  handleTodo(title, description, dueDate, priority) {
    const tempTodo = this.#todos.createTodo(
      title,
      description,
      dueDate,
      priority
    );
    this.#todos.addTodo(tempTodo);
  }
  getTodos() {
    return this.#todos.getTodos();
  }
  removeTodo(index) {
    this.#todos.removeTodo(index);
  }

  handleNote(title, description) {
    const tempNote = this.#notes.createNote(title, description);
    this.#notes.addNote(tempNote);
  }
  getNotes() {
    return this.#notes.getNotes();
  }
  removeNotes(index) {
    this.#notes.removeNotes(index);
  }
}

export default Project;
