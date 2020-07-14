const firstName = "William";
const lastName = "Johnson";
const age = 21;
let val;

val = firstName + lastName;

//Concatenation
val = firstName + " " + lastName;

//Appending or add
val = "Mark ";
val += "Morta";

val = "Hello my Name is " + firstName + " and I am " + age + " years old";

//Escaping
val = "That's awesome";

//Length
val = firstName.length;

//concat
val = firstName.concat(" ", lastName);

//Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//indexOf()
val = firstName.indexOf("w");
val = firstName.lastIndexOf("l");

//charAt()
val = firstName.charAt(5);

//get last character
val = firstName.charAt(firstName.length - 1);

//convert letters to * except last 4
const cc = "112312123123";
function musk(cc) {
  const value = cc
    .split("")
    .map((letter, idx) => (idx < cc.length - 4 ? "#" : letter))
    .join("");
  console.log(value);
}
// musk(cc);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(-3);

//slit()
const tags = "web design, web development, programming";
const str = "Hello my Name is Mark, how are you now?";
val = str.split(" ");
val = tags.split(",");

//replace()
val = str.replace("Mark", "Jack");

//includes() true or false
val = str.includes("?");
console.log(val);
