class Todos {
  #todos;

  constructor() {
    this.#todos = [];
  }

  createTodo(title, description, dueDate, priority) {
    return { title, description, dueDate, priority };
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

export default Todos;
