let val;

val = document;
//HTML Collection
val = document.all;
val = document.all[2];
//number of elements
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.domain;
//gives you the whole url
val = document.URL;
val = document.characterSet;
val = document.contentType;

//Select stuff
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

//links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
//collection of classes
val = document.links[0].classList[0];

//images
val = document.images;
//scripts
val = document.scripts;
val = document.scripts[2].src;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;
//convert collection to array
let scriptsArray = Array.from(scripts);

scriptsArray.forEach((script) => {
  console.log(script.src);
});

console.log(val);
