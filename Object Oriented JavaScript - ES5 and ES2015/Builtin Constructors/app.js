//String

const name1 = "Mark"; //primitive typeof string
const name2 = new String("Mark"); //Object typeof object

name2.foo = "bar";
//will return a String Object and give primitive value as the key
// console.log(name2);

/** it will print no since === will check for an equal value and type
 * and since name2 is object type
 */
if (name2 === "Mark") {
  console.log("YES");
} else {
  console.log("NO");
}

//Number
const num1 = 5; //normal
const num2 = new Number(5); //using constructor

//Boolean
const bool1 = true; //normal
const bool2 = new Boolean(true); //using constructor

//Functions
const getSum1 = function (x, y) {
  return x + y;
}; //normal function

console.log(getSum1(1, 3));

const getSum2 = new Function("x", "y", "return x + y"); //using constructor
console.log(getSum2(1, 4));

//Objects
const mark1 = {
  name: "mark",
  age: 21,
}; //normal object

console.log(mark1);

const mark2 = new Object({ name: "Mark", age: 21 }); //using constructor
console.log(mark2);

//Array
const arr1 = [1, 2, 3]; //primitive
const arr2 = new Array(1, 2, 3, 4); //constructor

console.log(arr2);

//Regular Expressions
const reg1 = /\w+/; //looking for word w that occurs 1 or more times
const reg2 = new RegExp("\\w+");

/**
 * This will only shows that there are built in constructor
 * that normally not used for because they have primitive way
 * that is more understandable and easy to use and not post
 * any issues
 * Just stick to the normal way of using the primitive equivalent of
 * that constructor.
 */
