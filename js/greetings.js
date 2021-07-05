const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function submitUserName(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}!`;
    localStorage.setItem("username", username);
}

const savedUserName = localStorage.getItem("username");

if (savedUserName == null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", submitUserName);
} else{
    greeting.innerText = `Hello ${savedUserName}!`;
    greeting.classList.remove("hidden");
    loginForm.classList.add("hidden");
}