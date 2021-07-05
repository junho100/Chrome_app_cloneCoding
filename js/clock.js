const clock = document.querySelector("#clock");

function updateTime(){
    dateTime = new Date();
    const hour = String(dateTime.getHours()).padStart(2, "0");
    const minute = String(dateTime.getMinutes()).padStart(2, "0");
    const second = String(dateTime.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour} : ${minute} : ${second}`;    
}
updateTime();
setInterval(updateTime, 1000);