function addTask() {
  const inputEl = document.getElementById("myTask");
  console.log(inputEl.value);
  const itemDiv = document.getElementById("contItem");
  console.log(itemDiv);
  const newTask = document.createElement("p");
  const newTaskText = document.createTextNode(inputEl.value);
  newTask.appendChild(newTaskText);
  itemDiv.appendChild(newTask);
  inputEl.value = "";
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "remove";
  removeBtn.classList.add("btnRemove");
  newTask.appendChild(removeBtn);
  removeBtn.addEventListener("click", () => {
    newTask.style.display = "none";
  });
}
