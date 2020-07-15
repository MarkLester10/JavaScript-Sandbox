//create some arrays

//traditional
const numbers = [43, 213, 2, 3, 4, 5, 23];

//using constructor or objects
const numbers2 = new Array(22, 45, 32, 21, 123, 34);

const fruits = ["Tamarin", "Apple", "Santol", "Niyog"];
const mixed = [
  22,
  "Hello",
  true,
  undefined,
  null,
  { a: 1, b: 2, c: 3 },
  new Date(),
];

let val;

//get length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
val = numbers[5];
//inserting in array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(100);

//MUTATING ARRAYS

//add on to the end of the array
numbers.push(999999);
//add on to the front of the array
numbers.unshift(0);
//take off from the end
numbers.pop();
//take off from the front
numbers.shift();
//splice values
numbers.splice(0, 4);
//reverse the array
numbers.reverse();

//Concatenate arrays
val = numbers.concat(numbers2);

//sort array with string values
val = fruits.sort();

//sort array with integer values using compare function
val = numbers2.sort((x, y) => x - y); //in ascending

//reverse sorting
val = numbers2.sort((x, y) => y - x); //in descending

//find value in an array
function under50(num) {
  return num < 50; //returns the first one under 50
}
val = numbers2.find(under50);

console.log(numbers2);
console.log(val);
