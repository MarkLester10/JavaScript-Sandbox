//Define UI Variables
const form = document.querySelector("#task-form");
const taskLists = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks); //when dom finish loading

  //add task event
  form.addEventListener("submit", addTask);
  //remove task event
  taskLists.addEventListener("click", removeTask);
  //clear tasks event
  clearBtn.addEventListener("click", clearTasks);
  //filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

//get tasks from local storage
function getTasks() {
  const tasks = checkLocalStorage();

  tasks.forEach(function (task) {
    createElement(task);
  });
}

//Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //call create element function
  createElement(taskInput.value);

  //store in local storage
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = "";

  e.preventDefault();
}

//Remove Task
function removeTask(e) {
  //EVENT DELEGATION
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      //Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//remove from local storage function
function removeTaskFromLocalStorage(taskItem) {
  const tasks = checkLocalStorage();

  tasks.forEach(function (task, idx) {
    if (taskItem.textContent === task) {
      tasks.splice(idx, 1); //get the index and delete 1 from the index
    }
  });

  //set to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clear tasks
function clearTasks() {
  // taskLists.innerHTML = "";

  //faster way and efficient
  while (taskLists.firstChild) {
    taskLists.removeChild(taskLists.firstChild);
  }

  //clear from local storage
  localStorage.clear();
}

//Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  //take all list items
  const listItems = document.querySelectorAll(".collection-item");

  listItems.forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function createElement(value) {
  //create li element
  const li = document.createElement("li");
  //add class
  li.className = "collection-item";
  //create text node and append to li
  li.appendChild(document.createTextNode(value));
  //create new link element for delete
  const link = document.createElement("a");
  //add class
  link.className = "delete-item secondary-content";
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append link to li
  li.appendChild(link);
  //append li to ul
  taskLists.appendChild(li);
}

//Store task
function storeTaskInLocalStorage(task) {
  const tasks = checkLocalStorage();

  tasks.push(task);

  //set item back to local storage
  /**Since local storage only accepts string and our tasks variable is an array
   *  we need to convert it to string using JSON.stringify */
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//check local storage
function checkLocalStorage() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    //full existing item in local storage :it returns a string
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  return tasks;
}
