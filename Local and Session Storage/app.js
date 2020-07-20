//set local storage item (leaves when you manually clear the local storage)
// localStorage.setItem("name", "John"); //key-value pair
// localStorage.setItem("age", "21"); //key-value pair

//set session storage item (leaves when you close the browser)
// sessionStorage.setItem("name", "Beth"); //key-value pair

//remove from storage
// localStorage.removeItem("name");

//get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

//clear
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  //create an array of task and store as a string
  let tasks;

  //check if something is in local storage
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    //parse into json or object (string to json)
  }

  //push the task from the form to variable array tasks
  tasks.push(task);

  //set to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks)); //since tasks is an object we need to convert it to string using JSON.stringify
  alert("Task Saved!");
  e.preventDefault();
});

let tasks;

tasks = localStorage.getItem("tasks"); // this will return string only

//parse it into json to make it an array
tasks = JSON.parse(tasks);

tasks.forEach(function (task) {
  console.log(task);
});
