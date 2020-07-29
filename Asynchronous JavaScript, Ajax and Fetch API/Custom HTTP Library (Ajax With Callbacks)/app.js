const http = new easyHTTP();

//GET Posts
http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// GET Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/100", function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//POST request - Create Post
// const data = { userId: 199, title: "New Posts", body: "This is a new Post" };

// http.post("https://jsonplaceholder.typicode.com/posts", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//PUT Request - Update Post
// const data = {
//   title: "Post One Update",
//   body: "This is a new content for post 1",
// };
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//DELETE Request - Delete Post
// http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
