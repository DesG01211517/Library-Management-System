"use strict";
//Book Class

class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }

  //borrow book
  borrowBook() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      console.log("Book borrowed successfully!");
    } else {
      console.log("Book Unavailable");
    }
  }
  //return book
  returnBook() {
    this.availableCopies++;
    console.log("Book returned");
  }
}

const book1 = new Book(
  "To Kill A Mockingbird",
  "Harper Lee",
  "978-0-06-112008-4",
  5
);

const book2 = new Book("1984", "George Orwell", "978-0-452-28423-4", 5);

const book3 = new Book(
  "The Great Gatsby",
  "F Scott Fitzgerald",
  "978-0-7432-7356-5",
  5
);

const book4 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J K Rowling",
  "9978-1-4088-5564-6",
  5
);

const book5 = new Book("The Hobbit", "J R Tolkien", "978-0-2611-0253-7", 5);

//creating library class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  //adding a book

  addBook(book) {
    this.books.push(book);
    console.log('Book "${book.title} added');
  }

  removeBook(isbn) {
    const index = this.books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      const removeBook = this.books.splice(index, 1)[0];
      console.log('Book "${removedBook.title}" removed');
    } else {
      console.log("Book Not Found");
    }
  }

  //Lookup Book by title

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
  //listing books

  listAllBooks() {
    console.log("Books in ${this.name} library:");
    this.books.forEach((book) => {
      console.log(
        "${book.title} by ${book.author} - isbn: ${book.isbn} - Available Copies: ${book.availableCopies}"
      );
    });
  }
}
