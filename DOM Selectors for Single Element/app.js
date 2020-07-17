let val;

//document.getElementById()
val = document.getElementById("task-title");
const taskTitle = val;

//Get things from the element
val = taskTitle.id;
val = taskTitle.className;

//Change styling
val = taskTitle.style.background = "#5E35B1";
val = taskTitle.style.color = "#fff";
val = taskTitle.style.padding = "10px";
val = taskTitle.style.borderRadius = "5px";
// val = taskTitle.style.display = "none";

//Change the content
val = taskTitle.textContent = "Task Lists";
val = taskTitle.innerText = "My Task Lists";
val = taskTitle.innerHTML = '<span style="color:cyan">Task Lists</span>';

//document.querySelector()
val = document.querySelector("#task-title");
val = document.querySelector(".card-title");
val = document.querySelector("h5");

val = document.querySelector("li").style.color = "red";
//sub classes
val = document.querySelector("ul li").style.color = "blue";

//select specific item using css pseudo element
val = document.querySelector("li:last-child").style.color = "red";
val = document.querySelector("li:nth-child(3)").style.color = "yellow";
val = document.querySelector("li:nth-child(4)").textContent = "Hello World";
val = document.querySelector("li:nth-child(odd)").style.background = "yellow";
val = document.querySelector("li:nth-child(even)").style.background = "blue";

console.log(val);
