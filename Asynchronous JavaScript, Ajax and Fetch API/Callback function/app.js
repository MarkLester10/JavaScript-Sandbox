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

//SYNCHRONOUS WAY

function createPostSync(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}

function getPostsSync() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("postsSync").innerHTML = output;
  }, 1000);
}

createPostSync({ title: "Post Seven", body: "This is post Seven" });

//it will run faster that createPost since it only takes 1s to get the posts, newly created posts will not be included to the getPosts()
getPostsSync();

//ASYNCHRONOUS WAY

function createPostAsync(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback(); //will call the callback before the time ends or server
  }, 2000);
}

function getPostsAsync() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("postsAsync").innerHTML = output;
  }, 1000);
}

createPostAsync(
  { title: "Post Seven", body: "This is post Seven" },
  getPostsAsync
);
