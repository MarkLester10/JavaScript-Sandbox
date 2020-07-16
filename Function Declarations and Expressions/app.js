//FUNCTION DECLARATION
function greet(firstName = "John", lastName = "Doe") {
  return `Hello ${firstName} ${lastName}`;
}
// console.log(greet());

//FUNCTION EXPRESSIONS
const square = function (x = 3) {
  // this is an anomymous function
  return x * x;
};
// console.log(square());

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS = IIFEs
(function (name) {
  console.log(`This is an IIFEs ${name}`);
})("Mark");

//PROPERTY METHODS
const todo = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(21);
todo.delete();
