const http = new EasyHttp();

//Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//User Data
const user = {
  name: "Mark Lester",
  email: "mark@email.com",
  username: "MarkLester",
};

//Add Users
// http
//   .post("https://jsonplaceholder.typicode.com/users", user)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//PUT Request - Update user
// http
//   .put("https://jsonplaceholder.typicode.com/users/1", user)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// DELETE Request - Delete user
http
  .delete("https://jsonplaceholder.typicode.com/users/9")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
