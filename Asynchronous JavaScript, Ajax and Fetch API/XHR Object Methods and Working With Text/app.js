//XHR Object Methods and Working With Text

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //create an XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN - specify the type of request we want to make and the URL or the file name we want to make it to.

  xhr.open("GET", "data.txt", true); //(typeofRequest, URL/filename, isAsynchrounus)

  console.log("Ready State", xhr.readyState); //State = 1 server connection established

  //Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log("Ready State", xhr.readyState); // State = 3 processing requests
  };

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  //error handling
  xhr.onerror = function () {
    console.log("Request error...");
  };

  //send the request
  xhr.send();

  /**
   * Processing a request goes to readyState Values
   * 0: request not initialized
   * 1: server connection established
   * 2: request received
   * 3: processing request
   * 4: request finished and response is ready
   */

  /**
   * HTTP Statuses
   * 200: "OK"
   * 403: "Forbidden"
   * 404: "Not Found"
   */
}
