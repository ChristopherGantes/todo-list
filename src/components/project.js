import Todos from "./todos";
import Notes from "./notes";
import Checklist from "./checklist";

class Project {
  #todos;
  #notes;
  #checklist;

  constructor() {
    this.#todos = new Todos();
    this.#notes = new Notes();
    this.#checklist = new Checklist();
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
  removeNote(index) {
    this.#notes.removeNotes(index);
  }

  handleChecklist(description, checked) {
    const tempCheckItem = this.#checklist.createCheckItem(description, checked);
    this.#checklist.addCheckItem(tempCheckItem);
  }
  getChecklist() {
    return this.#checklist.getChecklist();
  }
  removeCheckItem(index) {
    this.#checklist.removeCheckItem(index);
  }
}

export default Project;
