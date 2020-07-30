document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getAPI);

// FOR TEXT FILE DATA
function getText() {
  //fetch returns a promise
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// FOR JSON DATA
function getJson() {
  //fetch returns a promise
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `
        <ul>
        <li><strong>${post.title}</strong></li>
        <small>${post.body}</small>
        </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// FOR External API DATA
function getAPI() {
  //fetch returns a promise
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `
        <ul>
        <li><strong>${user.id}</strong>: ${user.login}</li>
        </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
