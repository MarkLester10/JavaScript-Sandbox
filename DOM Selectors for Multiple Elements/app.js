//document.getElementsByClassName()
const items = document.getElementsByClassName("collection-item"); //return HTML Collection

console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Awit My Lawit";

const listsItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

console.log(listsItems);

//document.getElementsByTagName;
let lis = document.getElementsByTagName("li"); //return HTML Collection

console.log(lis);
console.log(lis[0]);
lis[0].style.color = "blue";
lis[3].textContent = "Awit May Lawit";

//Convert HTML Collection into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach((li, idx) => {
  console.log(li.className);
  li.textContent = `${idx} : Hello`;
});

console.log(lis);

//document.querySelectorAll() => returns a node lists not a HTML collection
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach((item, idx) => {
  console.log(item.className);
  item.textContent = `${idx} : Alrighty`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach((li, idx) => {
  li.style.background = "#ccc";
});

//you can also use for loop  and it also work in HTML Collection
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);
