import "./todos.css";

function createTodoDiv(title, description, dueDate, priority, index) {
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo-div");
  todoDiv.setAttribute("id", index);

  const todoTitle = document.createElement("p");
  todoTitle.setAttribute("class", "todo-title");
  todoDiv.appendChild(todoTitle);

  const todoDescription = document.createElement("p");
  todoDescription.setAttribute("class", "todo-description");
  todoDiv.appendChild(todoDescription);

  const todoDueDate = document.createElement("p");
  todoDueDate.setAttribute("class", "todo-due-date");
  todoDiv.appendChild(todoDueDate);

  const todoPriority = document.createElement("p");
  todoPriority.setAttribute("class", "todo-priority");
  todoDiv.appendChild(todoPriority);

  todoTitle.textContent = title;
  todoDescription.textContent = description;
  todoDueDate.textContent = dueDate;
  todoPriority.textContent = priority;

  return todoDiv;
}

function createTodosContainer() {
  const todosContainer = document.createElement("div");
  todosContainer.setAttribute("class", "todos-container");

  return todosContainer;
}

function appendTodosContainer(todosContainer, todosObj) {
  const todos = todosObj.getTodos();
  todos.forEach((todo, index) => {
    const todoDiv = createTodoDiv(
      todo.title,
      todo.description,
      todo.dueDate,
      todo.priority,
      index
    );
    todosContainer.appendChild(todoDiv);
  });
}

function displayTodos(todosObj) {
  const todosContainer = createTodosContainer();
  appendTodosContainer(todosContainer, todosObj);

  return todosContainer;
}

export default displayTodos;
