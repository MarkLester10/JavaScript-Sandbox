//DOM is part of the Window Object
//Window object is the global object in client side javascript
//In node js, your computer system is your environment
//In client-side javascript, the WINDOW or browser is the global environment
//Both node and chrome used the same javascript engine which is the V8 engine
//localStorage, FETCH api, alert, prompt and confirm

//WINDOW METHODS / OBJECTS / PROPERTIES

//alert
// alert("Hello Pariii");

//prompt
// const input = prompt();
// alert(input);

//confirm
// if (confirm("Sure ka na ba? Final Answer?")) {
//   alert("Alright naman Sir");
// } else {
//   alert("Okay Fine, get back to work!");
// }

let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth; //inside scrollbars

//Scroll points
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href; //get the whole url
val = window.location.search; //show query string

//Redirect
// window.location.href = "http://google.com";

//Reload
// window.location.reload();

//History Object
// window.history.go(-1);
val = history.length;

//LocalStorage Object
val = window.localStorage.setItem("name", "Mark");
val = window.localStorage.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);
