class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Todos {
  #todos;

  constructor() {
    this.#todos = [];
  }

  createTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority);
  }

  addTodo(todo) {
    this.#todos.push(todo);
  }

  removeTodo(index) {
    this.#todos.splice(index, 1);
  }

  getTodos() {
    return this.#todos;
  }
}

export {Todo, Todos};
