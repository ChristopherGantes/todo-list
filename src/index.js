import "./main.css";
import { Note } from "./components/notes";
import { Todo } from "./components/todos";
import { CheckItem } from "./components/checklist";
import createProject from "./components/project";
import displayProject from "./display/project/project"

const body = document.querySelector("body");

const project = createProject();
project
  .notes
  .addNote(new Note("color todos?", "Change todo color based on priority"));
project
  .notes
  .addNote(new Note("color notes?", "Maybe add color option to notes"));

project
  .todos
  .addTodo(
    new Todo(
      "Layout page",
      "Layout the page with the holy grail",
      "2024-01-31",
      "HIGH"
    )
  );
project
  .todos
  .addTodo(
    new Todo(
      "Create project selection",
      "The left sidebar in holy grail should be for selecting the current project to display",
      "2024-01-31",
      "HIGH"
    )
  );
project
  .todos
  .addTodo(
    new Todo(
      "Create checklist",
      "Checklist can be done simply by following similar logic to notes and todos",
      "2024-01-31",
      "HIGH"
    )
  );

project.checklist.addCheckItem(new CheckItem("finish checklist finish checklist finish checklist finish checklist 0", true))
project.checklist.addCheckItem(new CheckItem("finish checklist 1", false))
project.checklist.addCheckItem(new CheckItem("finish checklist 2", false))
project.checklist.addCheckItem(new CheckItem("finish checklist 3", true))
project.checklist.addCheckItem(new CheckItem("finish checklist 4", true))
project.checklist.addCheckItem(new CheckItem("finish checklist 5", false))

console.log(project.notes.getNotes());

displayProject(project);
