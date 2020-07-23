//Object literals
// const mark = {
//   name: "Mark",
//   age: 21,
// };
// console.log(mark.age);

//Person Constructor
/** Constructors should start in capital letter
 * 'this' keyword refers to the current instance of an
 * Object
 * if no instantiation to the constructor 'this' keyword
 * will refer to itself
 */

console.log(this);
/** When you console.log the 'this' keyword outside
 * any constructor it pertains to the global object which
 * is the Window global object and we don't want to mess that
 */

function Person(name, dob, job) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  this.job = job;
}

//Instantiate

const mark = new Person("Mark", "7-10-1999", "Full-Stacs Software Engineer");
console.log(mark.calculateAge());
