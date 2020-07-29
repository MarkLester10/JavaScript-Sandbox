//ES5 OOP and AJAX

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  let that = this; //ES5
  this.http.onload = function () {
    //'this' keyword will now pertains to this function to fix this you need to reference 'this' keyword to another variable outside this function or use lexical this using arrow function
    if (that.http.status === 200) {
      callback(null, that.http.responseText); // return no errors
    } else {
      callback(`Error Status: ${that.http.status}`);
    }
  };

  this.http.send();
};

//Make a HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  //set content type
  this.http.setRequestHeader("Content-type", "application/json");

  let that = this;
  this.http.onload = function () {
    callback(null, that.http.responseText);
  };

  this.http.send(JSON.stringify(data)); //convert data to JSON string
};

//Make a HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  //set content type
  this.http.setRequestHeader("Content-type", "application/json");

  let that = this;
  this.http.onload = function () {
    callback(null, that.http.responseText);
  };

  this.http.send(JSON.stringify(data)); //convert data to JSON string
};

//Make a HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  let that = this; //ES5
  this.http.onload = function () {
    if (that.http.status === 200) {
      callback(null, "Post Deleted Successfully"); //that.http.responseText will return empty object
    } else {
      callback(`Error Status: ${that.http.status}`);
    }
  };

  this.http.send();
};
