const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

loginButton.addEventListener("click", ()=>{
    const Name = loginInput.value;
    if(Name.length == 0 || Name.length >= 10){
        alert("error");
    }
});