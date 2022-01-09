let ulDOM = document.getElementById("list");
let liDOM = document.createElement("li")
let inputTask = document.getElementById("task").value;
let taskAdd = document.addEventListener('submit', addTask)
function addTask(event) {
   
}
liDOM.innerHTML = inputTask
ulDOM.append(liDOM)