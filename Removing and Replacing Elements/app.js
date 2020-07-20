//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement("h2");
//Add id
newHeading.id = "task-title";
//Add new text node
newHeading.appendChild(document.createTextNode("Task List"));

//Get the old heading
const oldHeading = document.getElementById("task-title");
//Get the parent
const cardAction = document.querySelector(".card-action");
//Replace
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE THE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

//Classes and Attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

//Classes
val = link.className; //string
val = link.classList; //DOM Token List like an array
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

//Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title"); //test if has attribute
link.removeAttribute("title"); //remove attributes
val = link;
console.log(val);
