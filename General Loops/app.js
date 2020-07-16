//FOR LOOP
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is the number");
    continue; // will not print Number 2 it will replace
  }

  if (i === 5) {
    console.log("ISTAAAPPP");
    break;
  }
  console.log(`Number ${i}`);
}

//WHILE LOOP
let i = 0;

while (i < 10) {
  console.log(`Number ${i}`);
  i++;
}

//DO WHILE
let x = 0;

do {
  console.log(`Number ${x}`);
  x++;
} while (x < 10);

//LOOP THROUGH ARRAY
const cars = ["Honda", "Chevy", "Toyota", "Ford"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//FOREACH
cars.forEach(function (car, idx, array) {
  console.log(`${idx}:${car}`);
  console.log(array);
});

//MAP returns a diff array
const user = [
  { id: 1, name: "John" },
  { id: 2, name: "Dog" },
  { id: 3, name: "Sara" },
  { id: 4, name: "Binatog" },
  { id: 5, name: "Awit" },
];

const ids = user.map(function (user) {
  return user.id;
});

console.log(ids);

//FOR IN LOOP -used for objects!
const user = {
  firsName: "John",
  lastName: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
