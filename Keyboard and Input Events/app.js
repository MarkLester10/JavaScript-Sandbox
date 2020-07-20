const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

//Clear input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

//keydown
// taskInput.addEventListener("keydown", runEvent);

//keyup fires off when lift the key
// taskInput.addEventListener("keyup", runEvent);

//keypress
// taskInput.addEventListener("keypress", runEvent);

//focus when click inside of an input
// taskInput.addEventListener("focus", runEvent);

//blur when click outside of an input
// taskInput.addEventListener("blur", runEvent);

//cut (ctrl x or cut)
// taskInput.addEventListener("cut", runEvent);

//paste (ctrl v or paste)
// taskInput.addEventListener("paste", runEvent);

//Input (very handy it captures almost all input event)
// taskInput.addEventListener("input", runEvent);

//change
select.addEventListener("change", runEvent); //comment out the materialize.css in html to see this effect

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  //catch input from each keydown
  // console.log(e.target.value);
  heading.innerText = e.target.value;

  //Get input value
  //e.preventDefault();
  // console.log(taskInput.value);
}
