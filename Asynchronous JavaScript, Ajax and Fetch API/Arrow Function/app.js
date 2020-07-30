// const sayHello = function () {
//   console.log("Hello World");
// };

// const sayHello = () => {
//   console.log("Hello World");
// };

//more compact
// const sayHello = () => console.log("Hello World");

//return simple
// const sayHello  = () => "Hello World";

// return object literal
// const sayHello = () => ({ msg: "Hello" });

//with single parameter does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

//multiple parameters needs parenthesis
const sayHello = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

sayHello("Mark Lester", "Morta");
