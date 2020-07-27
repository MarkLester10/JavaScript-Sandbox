//ES6

//globals
const spinner = document.getElementById("spinner");
const button = document.getElementById("submit");
const list = document.getElementById("book-list");
clearButton = document.getElementById("clear").addEventListener("click", () => {
  const ui = new UI();
  ui.showAlert("Book List Cleared Successfully", "alert alert-success d-block");
  list.innerHTML = "";
  localStorage.clear();
});

//BOOK CLASS
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI CLASS - Contains all book methods
class UI {
  addBookToList(book) {
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

      //add to local storage
      Store.addBook(book);

      //remove spinner
      spinner.className = "d-none";
      button.className = "btn btn-block btn-dark d-block";

      //show success alert
      if (localStorage.getItem("books") === null && !book) {
        this.showAlert(
          "There are no books in you local storage",
          "alert alert-info d-block"
        );
      } else {
        this.showAlert(
          "Book added Successfully",
          "alert alert-success d-block"
        );
      }
    }, 3000);
  }

  showAlert(message, type) {
    alert = document.querySelector(".alert");

    alert.className = type;
    alert.textContent = message;

    //timeout after 3s
    setTimeout(function () {
      alert.className = "alert alert-success d-none";
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Local Storage Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, idx) => {
      if (book.isbn === isbn) {
        books.splice(idx, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

//DOM load event listener
document.addEventListener("DOMContentLoaded", Store.displayBooks());

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
  //remove from Ui
  ui.deleteBook(e.target.parentElement);

  //remove from local storage
  const isbnNo =
    e.target.parentElement.parentElement.previousElementSibling.textContent;
  Store.removeBook(isbnNo);
  //show alert
  ui.showAlert("Book Deleted Successfully", "alert alert-success d-block");

  e.preventDefault();
});
