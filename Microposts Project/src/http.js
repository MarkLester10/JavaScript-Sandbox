/**
 * EzHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Mark Lester Morta
 * @license MIT
 *
 **/

//EzHTTP library using ES6 features, Fetch and Async and Await

class EasyHttp {
  //Make HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //Make an HTTP POST Requests
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data), //sends the data
    });

    const resData = await response.json();
    return resData;
  }

  //Make an HTTP PUT Requests
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  //Make an HTTP DELETE Requests
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await "Resource Deleted";

    return resData;
  }
}


export const http = new EasyHttp();