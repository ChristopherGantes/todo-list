import displayNotes from "../notes/notes.js";
import displayTodos from "../todos/todos.js";
import displayChecklist from "../checklist/checklist.js";
import "./project.css"

function displayProject(project) {
  const mainBox = document.querySelector("main");
  mainBox.replaceChildren();
  const todosContainer = displayTodos(project.todos);
  const checklistContainer = displayChecklist(project.checklist);
  const notesContainer = displayNotes(project.notes);

  mainBox.appendChild(todosContainer);
  mainBox.appendChild(checklistContainer);
  mainBox.appendChild(notesContainer);
}

export default displayProject;
