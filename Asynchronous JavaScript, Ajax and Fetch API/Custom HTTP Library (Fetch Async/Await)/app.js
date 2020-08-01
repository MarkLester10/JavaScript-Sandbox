const http = new EasyHttp();

//some user data
const user = {
  name: "Mark Lester",
  email: "mark@email.com",
  username: "MarkLester",
};

//GET Request
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => console.log(res));

//POST Request
// http
//   .post("https://jsonplaceholder.typicode.com/users", user)
//   .then((res) => console.log(res));

//PUT Request
// http
//   .put("https://jsonplaceholder.typicode.com/users/1", user)
//   .then((res) => console.log(res));

//DELETE Request
http
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
