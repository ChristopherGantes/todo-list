import "./main.css";

import Project from "./components/project";
import displayNotes from "./display/note/note";

const body = document.querySelector("body");

const project = new Project();
project.handleNote("Finish checklist", "checklist needs a module");

project.handleNote("color notes?", "maybe add color option to notes?");

console.log(project.getNotes());

body.appendChild(displayNotes(project.getNotes()));
