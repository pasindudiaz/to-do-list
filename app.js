const inputtext = document.getElementById("input-text");      
const listcontainer = document.getElementById("list-container");
const ticksound = document.getElementById("ticksound");
const clicksound = document.getElementById("clicksound");
const cancelsound = document.getElementById("cancelsound");
const errorsound = document.getElementById("errorsound");

function addTask() {
    if (inputtext.value == '') {
        alert("You must write something!");
        errorsound.play();
    } else {
        clicksound.play();
        let li = document.createElement("li");
        li.innerText = inputtext.value;
        listcontainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputtext.value = "";
    saveTasks()
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        ticksound.play();
        saveTasks()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        cancelsound.play();
        saveTasks()
    }
    I
}, false);

function saveTasks() {
    localStorage.setItem("tasks", listcontainer.innerHTML);
}
function getTask() {
    listcontainer.innerHTML = localStorage.getItem("tasks");
}
getTask();