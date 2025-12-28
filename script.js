let addBtn = document.getElementById("add");
let taskInput = document.getElementById("task");
let list = document.getElementById("list");

addBtn.onclick = function () {

  let taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.className = "remove";

  li.appendChild(delBtn);
  list.appendChild(li);

  delBtn.onclick = function () {
    li.remove();
  };

  taskInput.value = "";
};
