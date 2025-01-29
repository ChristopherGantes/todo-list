import "./checklist.css";

function createCheckItemDiv(title, checked, index) {
  const checkItemDiv = document.createElement("div");
  checkItemDiv.setAttribute("class", "check-item-div");
  checkItemDiv.setAttribute("id", index);

  const checkItemDescription = document.createElement("p");
  checkItemDescription.setAttribute("class", "check-item-description");
  checkItemDiv.appendChild(checkItemDescription);

  const checkItemCheckbox = document.createElement("input");
  checkItemCheckbox.setAttribute("type", "select");
  checkItemCheckbox.setAttribute("class", "check-item-checkbox");
  checkItemDiv.appendChild(checkItemCheckbox);

  checkItemTitle.textContent = title;
  checkItemDescription.textContent = checked;

  return checkItemDiv;
}

function createChecklistContainer() {
  const checklistContainer = document.createElement("div");
  checklistContainer.setAttribute("class", "checklist-container");

  return checklistContainer;
}

function appendChecklistContainer(checklistContainer, checklist) {
  checklist.forEach((checkItem, index) => {
    const checkItemDiv = createCheckItemDiv(
      checkItem.title,
      checkItem.checked,
      index
    );
    checklistContainer.appendChild(checkItemDiv);
  });
}

function displayChecklist(checklist) {
  const checklistContainer = createChecklistContainer();
  appendChecklistContainer(checklistContainer, checklist);

  return checklistContainer;
}

export default displayChecklist;
