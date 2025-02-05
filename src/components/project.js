import { Todos } from "./todos";
import { Notes } from "./notes";
import { Checklist } from "./checklist";

class Project {
  #todos;
  #notes;
  #checklist;

  constructor() {
    this.#todos = new Todos();
    this.#notes = new Notes();
    this.#checklist = new Checklist();
  }

  getTodos() {
    return this.#todos;
  }

  getNotes() {
    return this.#notes;
  }

  getChecklist() {
    return this.#checklist;
  }
}

export default Project;
