//PRIMITIVE TYPES

//String
const name = "John Doe";

//Number
const age = 21;

//Boolean
const isAvailable = true;

//Null
const laptop = null;

//Undefined
let graduation;

//Symbol
const sym = Symbol();

//REFERENCE TYPES - Objects

//Array
const hobbies = ["movies", "guitar"];

//Object Literals
const country = {
  name: "Philippines",
  religion: "Roman Catholic",
  population: 120000000,
};

//Date
const today = new Date();

//TYPE CONVERSION
let val;

//number to string
val = 5;
val = String(5);

//Boolean to String
val = String(true);

//Date to String
val = String(new Date());

//Array to String
val = String([1, 2, 3, 4, 5]);

//toString method
val = (5).toString();
val = true.toString();

//String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = parseInt("500");
val = parseFloat("500.30");
//use toFixed() to specify a number of decimals

//TYPE COERSION
const val1 = 5;
const val2 = String(6);
const sum = val1 + val2;
console.log(sum, typeof sum);
