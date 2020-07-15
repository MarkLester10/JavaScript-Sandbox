//defining object literal

const person = {
  firstName: "Mark",
  lastName: "Morta",
  age: 21,
  email: "marklester@gmail.com",
  hobbies: ["music", "programming", "movies"],
  address: {
    city: "Calamba City",
    state: "Laguna",
  },
  getBirthYear: function () {
    return 1999 - this.age;
  },
};

let val;
val = person;
//get specific value
val = person.firstName; //recommended
val = person["firstName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 32 },
  { name: "Mark", age: 21 },
  { name: "Mali", age: 18 },
  { name: "Awit", age: 90 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
