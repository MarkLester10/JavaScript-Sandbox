// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("Hello World");
//   e.preventDefault(); //prevent elemenent from default behavior
// });

//you can pass the function name also
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  // console.log("hello World");

  //EVENT OBJECT
  let val;

  val = e;

  //Event Target element
  val = e.target; //returns the actual html elment
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "Hello"; //change this button text to Hello

  //Event Type
  val = e.type;

  //Timestamp
  val = e.timeStamp;

  //Coordinates of the event relative to the window
  val = e.clientY; //returns the number of pixel from the top or y-axis (window)
  val = e.clientX; //number of pixel from the x-axis (window)

  //Coordinates of the event relative to the element itself
  val = e.offsetY; //returns the number of pixel from the top or y-axis (element)
  val = e.offsetX; //number of pixel from the x-axis (element)

  console.log(val);
}
