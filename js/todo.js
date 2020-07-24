const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  }); //filter returns only things that function(toDo) returns "true" in an array form
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  /*
    JSON: JavaScript Object Notation
    JSON.stringify: convert js object to string
    local storage can only save a string
    */
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text, tag) {
  const li = document.createElement("li");
  li.className = "toDo";
  let newId;
  if (tag === 0) newId = Date.now();
  else newId = tag;
  li.id = newId;

  const delBtn = document.createElement("button");
  delBtn.className = "toDoBtn";
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);

  const span = document.createElement("span");
  span.innerText = text;
  //const newId = toDos.length + 1;
  //const newId = (toDoList.lastElementChild === null ? 1 : parseInt(toDoList.lastElementChild.id)+1);

  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);

  const toDoObj = {
    id: newId,
    text: text,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, 0);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, toDo.id);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
