const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDos) => {
        return toDos.id != parseInt(li.id);
    });
    li.remove();
    saveToDos();
}

function paintTodo(item){
    const li = document.createElement("li");
    li.id = item.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    span.innerText = item.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        id : Date.now(),
        text : newToDo
    };
    toDos.push(newToDoObj);
    saveToDos();
    toDoInput.value = "";
    paintTodo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem("todos");

if(savedToDo){
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}