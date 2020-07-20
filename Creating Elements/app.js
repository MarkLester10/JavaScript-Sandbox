//Create Element
const li = document.createElement("li");

//Add Class
li.className = "collection-item";

//Add id
li.id = "new-item";

//Add Attribute
li.setAttribute("title", "New item");

//Create text node and append
li.appendChild(document.createTextNode("New Item"));

//Create new link element
const link = document.createElement("a");
//Add Class
link.className = "delete-item secondary-content";
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);

//Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
