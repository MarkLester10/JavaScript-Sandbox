//adding async to the beginning of a function makes it returns a Promise

async function myFunct() {
  //if you want something to make asynchronous within here we can use await to actually waits until that's resolved

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World"), 5000);
  });

  //throw errors
  const err = false;
  if (!err) {
    const res = await promise; //waits until promise is resoved
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunct()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Best Case to use it is with Fetch API
async function getUsers() {
  //await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const err = false;
  if (!err) {
    //only proceed once response is resolved
    const data = await response.json();

    //only proceed once the data is resolved (second Promised is resolved)
    return data;
  } else {
    await Promise.reject(new Error("Parang may mali?"));
  }
}

getUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
