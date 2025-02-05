class CheckItem {
  constructor(description, checked) {
    this.description = description;
    this.checked = checked;
  }
}

class Checklist {
  #checklist;

  constructor() {
    this.#checklist = [];
  }

  createCheckItem(description, checked) {
    return new CheckItem(description, checked);
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

export {CheckItem, Checklist};
