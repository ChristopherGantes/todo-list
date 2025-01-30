class Checklist {
  #checklist;

  constructor() {
    this.#checklist = [];
  }

  createCheckItem(description, checked) {
    return { description, checked };
  }

  addCheckItem(checkItem) {
    this.#checklist.push(checkItem);
  }

  removeCheckItem(index) {
    this.#checklist.splice(index, 1);
  }

  getChecklist() {
    return this.#checklist;
  }
}

export default Checklist;
