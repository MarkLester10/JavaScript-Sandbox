/** EVENT BUBBLING
 * when an event happens on a particular element in the DOM
 * it 'll actually bubble up through its parents
 *
 * EVENT DELAGATION
 *  almost the opposite of event bubbling. It's where we put the listener
 * on one of the parent elements and then we use logic inside of the event
 * handler to target the element that we actually want that CLICK for or whatever type
 * of event it is.
 */

//EVENT BUBBLING How it works?

//main element
document.querySelector(".card-title").addEventListener("click", function () {
  console.log("card title");
});

//parent of card-title
document.querySelector(".card-content").addEventListener("click", function () {
  console.log("card content");
});

//parent of card-content
document.querySelector(".card").addEventListener("click", function () {
  console.log("card");
});

/** It will print all the 3 consoles eventhough you
 * only click the first element with an event listener which in
 * this case is the .card-title.
 * The reason why this happening is because of event bubbling, once the element
 * inside the dom was clicked that click event will bubble up to all its parent elements
 */

//EVENT DELEGATION How it works?
/** The whole definition of event delegation in
 * simple term is just putting the listener on
 * a parent and then putting a condition in here
 * to try to find the target element and then doing your
 * functionality there
 * MODALS are best examples
 */

//choose a parent
document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  /** If you have dynamic classes better use
   * the .classList.contains() helper function than
   * using only the className.
   * .contains() check for the existence of a certain class
   */
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.preventDefault;
    e.target.parentElement.parentElement.remove();
  }
}
