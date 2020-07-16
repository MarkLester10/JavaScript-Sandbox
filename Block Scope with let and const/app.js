//Global Scope
var a = 1;
let b = 2;
const c = 3;

//function scope
(function test() {
  //this variables are different from global scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Function Scope: ${a} ${b} ${c}`);
})();

//Block Scope (if statement, loop or anything inside curly braces)

if (true) {
  //in this case the Block Scope var a will override the Global Scope var a
  //let and const will still independent from the Global Scope
  var a = 10;
  let b = 5;
  const c = 6;
  console.log(`(if)Block Scope: ${a} ${b} ${c}`);
}

for (var a = 0; a < 10; a++) {
  //in this case the global scope var a will be equal to 10
  console.log(`Loop: ${a}`);
}

//That's the reason why let and const was created because they have block level scope unlike var

console.log(`Global Scope: ${a} ${b} ${c}`);
