//classes have syntactic sugar of creating objects in JavaScript

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  //any method added to this class will automatically added to prototypes
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsNewJob(newJob) {
    return `I'm now a ${newJob}`;
  }

  /**
   * Static Methods
   * one that you can use without instantiating an object
   * If you're just using a standalone function and not using the 'this' keyword, just use a static function and that's a good case for static method
   */
  static addNumbers(x, y) {
    return x + y;
  }
}

const mark = new Person("Mark Lester", "Morta", "07/10/1999");

console.log(mark.getsNewJob("Full-Stack JavaScript Developer"));

//accessing static method
console.log(Person.addNumbers(1, 2));
