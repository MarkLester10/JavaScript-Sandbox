/**
 * EzHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Mark Lester Morta
 * @license MIT
 *
 **/

//EzHTTP library using ES6 features, Fetch and Promise

class EasyHttp {
  //Make HTTP GET Request
  get(url) {
    /** wrap the whole fetch to a promise to make asynchronous */
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Make an HTTP POST Requests
  post(url, data) {
    return new Promise((resolve, reject) => {
      //pass the method, headers, and body as 2nd param to fetch when creating post request
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data), //sends the data
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Make an HTTP PUT Requests
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  //Make an HTTP DELETE Requests
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => resolve("Resource Deleted"))
        .catch((err) => reject(err));
    });
  }
}
