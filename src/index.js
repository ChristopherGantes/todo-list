import "./main.css";

import Project from "./components/project";
import displayNotes from "./display/notes/notes";
import displayTodos from "./display/todos/todos";
import displayChecklist from "./display/checklist/checklist";

const body = document.querySelector("body");

const project = new Project();
project.handleNote("color todos?", "Change todo color based on priority");
project.handleNote("color notes?", "Maybe add color option to notes");

project.handleTodo(
  "Layout page",
  "Layout the page with the holy grail",
  "2024-01-31",
  "HIGH"
);

project.handleTodo(
  "Create project selection",
  "The left sidebar in holy grail should be for selecting the current project to display",
  "2024-01-31",
  "HIGH"
);

project.handleTodo(
  "Create checklist",
  "Checklist can be done simply by following similar logic to notes and todos",
  "2024-01-31",
  "HIGH"
);

project.handleChecklist("finish checklist 0", true);
project.handleChecklist("finish checklist 1", false);
project.handleChecklist("finish checklist 2", false);
project.handleChecklist("finish checklist 3", true);
project.handleChecklist("finish checklist 4", true);
project.handleChecklist("finish checklist 5", false);


console.log(project.getNotes());

body.appendChild(displayTodos(project.getTodos()));
body.appendChild(displayNotes(project.getNotes()));
body.appendChild(displayChecklist(project.getChecklist()));

