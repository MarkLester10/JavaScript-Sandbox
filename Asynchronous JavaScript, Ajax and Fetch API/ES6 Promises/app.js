const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post Two",
  },
  {
    title: "Post Three",
    body: "This is post Three",
  },
  {
    title: "Post Four",
    body: "This is post Four",
  },
  {
    title: "Post Five",
    body: "This is post Five",
  },
  {
    title: "Post Six",
    body: "This is post Six",
  },
];

//USING CALLBACK

// function createPostCallback(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPostsCallback() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.getElementById("postsCallback").innerHTML = output;
//   }, 1000);
// }

// createPostCallback(
//   { title: "Post Seven (Callback)", body: "This is post from callback" },
//   getPostsCallback
// );

//USING PROMISE

function createPostPromise(post) {
  //resolve - is what we're calling when we're done with what we're doing
  //reject - if there is some kind of error that we wanna throw

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const err = false;
      if (err) {
        reject("Error: Something went wrong");
      } else {
        resolve();
      }
    }, 2000);
  });
}

function getPostsPromise() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("postsPromise").innerHTML = output;
  }, 1000);
}

//then handle the promise/resolve with .then
createPostPromise({
  title: "Post Seven (Promise)",
  body: "This is post from Promise",
})
  .then(getPostsPromise)
  //handle the reject method
  .catch(function (err) {
    console.log(err);
  });
