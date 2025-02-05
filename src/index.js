import "./main.css";
import { Note } from "./components/notes";
import { Todo } from "./components/todos";
import { CheckItem } from "./components/checklist";
import Project from "./components/project";
import displayNotes from "./display/notes/notes";
import displayTodos from "./display/todos/todos";
import displayChecklist from "./display/checklist/checklist";

const body = document.querySelector("body");

const project = new Project();
project
  .getNotes()
  .addNote(new Note("color todos?", "Change todo color based on priority"));
project
  .getNotes()
  .addNote(new Note("color notes?", "Maybe add color option to notes"));

project
  .getTodos()
  .addTodo(
    new Todo(
      "Layout page",
      "Layout the page with the holy grail",
      "2024-01-31",
      "HIGH"
    )
  );
project
  .getTodos()
  .addTodo(
    new Todo(
      "Create project selection",
      "The left sidebar in holy grail should be for selecting the current project to display",
      "2024-01-31",
      "HIGH"
    )
  );
project
  .getTodos()
  .addTodo(
    new Todo(
      "Create checklist",
      "Checklist can be done simply by following similar logic to notes and todos",
      "2024-01-31",
      "HIGH"
    )
  );

project.getChecklist().addCheckItem(new CheckItem("finish checklist 0", true))
project.getChecklist().addCheckItem(new CheckItem("finish checklist 1", false))
project.getChecklist().addCheckItem(new CheckItem("finish checklist 2", false))
project.getChecklist().addCheckItem(new CheckItem("finish checklist 3", true))
project.getChecklist().addCheckItem(new CheckItem("finish checklist 4", true))
project.getChecklist().addCheckItem(new CheckItem("finish checklist 5", false))

console.log(project.getNotes());

body.appendChild(displayTodos(project.getTodos()));
body.appendChild(displayNotes(project.getNotes()));
body.appendChild(displayChecklist(project.getChecklist()));
