import "./checklist.css";

function createCheckItemDiv(description, checked, index) {
  const checkItemDiv = document.createElement("div");
  checkItemDiv.setAttribute("class", "check-item-div");
  checkItemDiv.setAttribute("id", index);

  const checkItemDescription = document.createElement("label");
  checkItemDescription.setAttribute("class", "check-item-description");
  checkItemDescription.setAttribute("for", `${index}-item`);
  checkItemDiv.appendChild(checkItemDescription);

  const checkItemCheckbox = document.createElement("input");
  checkItemCheckbox.setAttribute("type", "checkbox");
  checkItemCheckbox.setAttribute("class", "check-item-checkbox");
  checkItemCheckbox.setAttribute("id", `${index}-item`);
  checkItemDiv.appendChild(checkItemCheckbox);

  checkItemDescription.textContent = description;
  checkItemCheckbox.checked = checked;

  return checkItemDiv;
}

function createChecklistContainer() {
  const checklistContainer = document.createElement("div");
  checklistContainer.setAttribute("class", "checklist-container");

  return checklistContainer;
}

function appendChecklistContainer(checklistContainer, checklistObj) {
  const checklist = checklistObj.getChecklist();
  checklist.forEach((checkItem, index) => {
    const checkItemDiv = createCheckItemDiv(
      checkItem.description,
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
