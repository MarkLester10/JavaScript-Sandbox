//globals
document.querySelector(".get-jokes").addEventListener("click", getJokes);
const alert = document.getElementById("alert");
const jokeHeading = document.getElementById("joke-heading");
const loader = document.querySelector(".loader");

function getJokes(e) {
  const number = document.querySelector("input[type='number']").value;
  const category = document.getElementById("category").value;
  if (number === "" || category === "") {
    showAlert("Please fill in all fields", "alert error");
  } else {
    const xhr = new XMLHttpRequest();

    if (category === "explicit") {
      xhr.open(
        "GET",
        `http://api.icndb.com/jokes/random/${number}?limitTo=[explicit]`,
        true
      );
    } else if (category === "nerdy") {
      xhr.open(
        "GET",
        `http://api.icndb.com/jokes/random/${number}?limitTo=[nerdy]`,
        true
      );
    } else {
      xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    }
    xhr.onprogress = function () {
      loader.style.display = "block";
    };

    xhr.onload = function () {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        let output = "";
        if (response.type === "success") {
          response.value.forEach((joke) => {
            output += `
          <li>${joke.joke}</li>
          `;
          });
        } else {
          output += '<li class="alert error">No Jokes Found</li>';
        }

        loader.style.display = "none";
        showAlert("Be Happy and Stay Positive Everyday :)", "alert success");
        jokeHeading.style.display = "block";
        document.querySelector(".jokes").innerHTML = output;
      }
    };

    xhr.send();
  }
  e.preventDefault();
}

//show alert
function showAlert(message, className) {
  alert.innerHTML = `<div class="${className}">${message}</div>`;
  setTimeout(removeAlert, 3000);
}

//remove alert
function removeAlert() {
  alert.innerHTML = "";
}
