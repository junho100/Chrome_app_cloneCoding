const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    span.innerText = newToDo;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDos.push(newToDo);
    toDoInput.value = "";
    paintTodo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);