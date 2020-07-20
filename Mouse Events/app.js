const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//click
// clearBtn.addEventListener("click", runEvent);

//doubleclick
// clearBtn.addEventListener("dblclick", runEvent);

//mousedown (click and hold)
// clearBtn.addEventListener("mousedown", runEvent);

//mouseup (click and hold and let go)
// clearBtn.addEventListener("mouseup", runEvent);

//mousenter when mouse enters the card element
// card.addEventListener("mouseenter", runEvent);
//mouseover
// card.addEventListener("mouseover", runEvent);

//mouseleave when mouse leaves the card element
// card.addEventListener("mouseleave", runEvent);
//mouseout
// card.addEventListener("mouseout", runEvent);

/*The difference between these two events is that mouseout and mouseover only fires off when you go to another element
 * that's inside the main target element while the mousenter and mouseleave only fires off when enters and leaves the main target element
 */

//mousemove
card.addEventListener("mousemove", runEvent);

//

//Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},40)`;
}
