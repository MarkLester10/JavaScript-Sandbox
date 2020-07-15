//Template Literals

const name = "Mark";
const age = 21;
const job = "Web Developer";
const city = "Philippines";

let html;

//without template strings (ese5)

html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

function hello() {
  return "Hello";
}

//Template Strings or Literals

html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? "Over 30" : "under 30"}</li>
</ul>
`;

document.body.innerHTML = html;
