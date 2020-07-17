//Traverse the DOM => means move up and down
//we're dealing with parents and children of specific node

let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

//Get Child Nodes of list
val = list.childNodes; //return a nodelist contains text node
val = list.childNodes[0]; //it will give as the text node which is the line before every li's
val = list.childNodes[0].nodeName; // returns #text node
val = list.childNodes[3].nodeType;

//nodeType returns a number that pertains to the ff;
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Get children
//use children more than childnodes to get only the elements
val = list.children; //return HTML Collection
val = list.children[1];
val = list.children[1].textContent = "Hello Priii";

//children of children
val = list.children[0].children;
val = list.children[0].children[0];
val = list.children[0].children[0].id = "test-link";

//firstChild
val = list.firstChild; //return a text node,element, or comment
val = list.firstElementChild; //returns only the element

//lastChild
val = list.lastChild; //returns the text node, element or comment
val = list.lastElementChild; //returns only the element

//get childElementCount
val = list.childElementCount;

//You can do all previous ways to Parent

//Get Parent node
val = listItem.parentNode; //returns the element
val = listItem.parentElement; //also returns the element
val = listItem.parentElement.parentElement; //parent of parent

//Siblings

//Get next sibling
val = listItem.nextSibling; //again returns a text node
val = listItem.nextElementSibling; //returns the actual element

//Get Previous sibling
val = listItem.previousSibling; //returns a text node
val = listItem.previousElementSibling;
3;

//returns the element

console.log(val);
