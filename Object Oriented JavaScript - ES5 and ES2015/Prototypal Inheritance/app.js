// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Person Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); //allow us to call another function from somewhere else in the current context. It this case were inhereting the Person Constructor

  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype in order to use the methods inside it to any Customer instance
Customer.prototype = Object.create(Person.prototype);

//show what constructor we are using
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer("Tom", "Jerry", "113-1231-32131", "Premium");

console.log(customer1);

//We can also override the methods inside Person prototype

//Customer Greeting
Customer.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName} to our company!`;
};

//we're now able to use and override the greeting method even though greeting is part of Person prototype
console.log(customer1.greeting()); //Hello Tom Jerry to our company! => Customer prototype greeting()
console.log(person1.greeting()); //Hello there John Doe => Person prototype greeting()
