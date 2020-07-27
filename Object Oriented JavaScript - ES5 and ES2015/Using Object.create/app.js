//Object.create is an ES6 way of creating an object with methods/function inside it's prototype

const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsNewJob: function () {
    return `I am now a ${this.newJob}`;
  },
};

const mark = Object.create(personPrototypes);
mark.firstName = "Mark";
mark.lastName = "Morta";
mark.newJob = "React Developer";
mark.age = 21;

console.log(mark);

//Another way
const john = Object.create(personPrototypes, {
  firstName: { value: "john" },
  lastName: { value: "doe" },
  age: { value: 21 },
  newJob: { value: "Vue Developer" },
});

console.log(john.getsNewJob());
