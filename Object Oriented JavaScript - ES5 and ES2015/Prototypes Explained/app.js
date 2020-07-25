/**
 * Each object in javascript has a prototypes, and a
 * prototype is an object itself.
 * All objects inherit their properties and methods from their prototype
 */

//When you're dealing with object literals then you're inheriting from a prototype called Object

//Object.prototype

//When you're dealing with objects that were created through constructor like for instance the person constructor it's going to come from

//Person.prototype

function Person(firstName, lastName, dob, job) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.job = job;
  this.birthday = new Date(dob);
}

/** Since calculate age is the same for every instance of Person object we can move this to prototype and normally access it like before
 * Using prototype helps you to not flood your
 * constructors with multiple methods/functions
 */

//Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//you can also manipulate data => getsnewJob
Person.prototype.getsNewJob = function (newJob) {
  this.job = newJob;
};

const mark = new Person("Mark", "Morta", "7-10-99", "Web Developer");
const lester = new Person(
  "lester",
  "Morta",
  "July 10 1995",
  "Software Developer"
);

//accessing method inside prototype
console.log(lester);
console.log(lester.calculateAge());
console.log(lester.getFullName());
console.log(lester.job);
lester.getsNewJob("Senior Software Engineer");
console.log(lester.job);

//you also have access to object prototype inside that Person prototype

console.log(lester.hasOwnProperty("job")); //returns a boolean in our case it will be true
console.log(lester.hasOwnProperty("getFullName")); //false since getFullName is not an actual property, it's part of prototype
