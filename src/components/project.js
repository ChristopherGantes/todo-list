import { Todos } from "./todos";
import { Notes } from "./notes";
import { Checklist } from "./checklist";

function createProject() {
  return {
    todos: new Todos(),
    notes: new Notes(),
    checklist: new Checklist(),
  };
}

export default createProject;
