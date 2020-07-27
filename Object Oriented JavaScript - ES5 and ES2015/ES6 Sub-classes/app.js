//Inheritance in ES6 Classes also called sub-classes

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName} thanks for subscribing to our ${this.membership} membership`;
  }

  //you can use any properties and non-static methods of Customer class in here since your extending it.
}

//extends allow you to use any properties and methods from Person class
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); //calling person constructor -> get access to Person properties
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return `$500`;
  }
}

const mark = new Customer("Mark Lester", "Morta", "097234231", "Premium");

//greeting method from Person class
console.log(mark.greeting());

//Customer static method
console.log(Customer.getMembershipCost());
