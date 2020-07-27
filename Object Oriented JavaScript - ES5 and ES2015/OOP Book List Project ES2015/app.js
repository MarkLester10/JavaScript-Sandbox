//ES2015 or ES5

//globals
const spinner = document.getElementById("spinner");
const button = document.getElementById("submit");
const list = document.getElementById("book-list");
document.getElementById("clear").addEventListener("mousedown", function () {
  const ui = new UI();
  ui.showAlert("Book List Cleared Successfully", "alert alert-success d-block");
  list.innerHTML = "";
  localStorage.clear();
});

//Book Cosntructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor -set of prototype methods
function UI() {}

UI.prototype.addBookToList = function (book) {
  spinner.className = "d-block";
  button.className = "btn btn-block btn-dark d-none";
  setTimeout(() => {
    //Create tr element
    const row = document.createElement("tr");
    //Insert td's
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete"><i class="fa fa-trash text-danger cursor-pointer"></i></a></td>`;

    //append to list
    list.appendChild(row);

    //Store to local storage
    const store = new Store();
    store.addBook(book);

    //remove spinner
    spinner.className = "d-none";
    button.className = "btn btn-block btn-dark d-block";

    //show success alert
    this.showAlert("Book added Successfully", "alert alert-success d-block");
  }, 2000);
};

//Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

//Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//showAlert
UI.prototype.showAlert = function (message, type) {
  alert = document.querySelector(".alert");

  alert.className = type;
  alert.textContent = message;

  //timeout after 3s
  setTimeout(function () {
    alert.className = "alert alert-success d-none";
  }, 3000);
};

//Local Storage Constructors
function Store() {}
Store.prototype.getBooks = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};

Store.prototype.displayBooks = function () {
  const books = this.getBooks();

  books.forEach(function (book) {
    const ui = new UI();
    ui.addBookToList(book);
  });
};

Store.prototype.addBook = function (book) {
  const books = this.getBooks();
  books.push(book);

  localStorage.setItem("books", JSON.stringify(books));
};

Store.prototype.removeBook = function (isbn) {
  const books = this.getBooks();
  books.forEach(function (book, idx) {
    if (book.isbn === isbn) {
      books.splice(idx, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
};

//Event Listener for add
document.getElementById("book-form").addEventListener("submit", function (e) {
  //Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //Instantiating a book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "alert alert-danger d-block");
  } else {
    //Add book to list
    ui.addBookToList(book);

    //Clear fiels
    ui.clearFields();
  }
  e.preventDefault();
});

//Event Listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  //remove from ui
  ui.deleteBook(e.target.parentElement);

  //remove from local storage
  const isbnNo =
    e.target.parentElement.parentElement.previousElementSibling.textContent;
  const store = new Store();
  store.removeBook(isbnNo);

  //show alert
  ui.showAlert("Book Deleted Successfully", "alert alert-success d-block");
  e.preventDefault();
});

//DOM Event Listener
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("books") === null) {
    const ui = new UI();
    ui.showAlert(
      "There are no books in your local storage",
      "alert alert-info d-block"
    );
  }
  const store = new Store();
  store.displayBooks();
});
