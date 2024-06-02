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
      console.log(`Book ${Book.title} borrowed successfully!`);
    } else {
      console.log(`Book ${Book.title} Unavailable`);
    }
  }
  //return book
  returnBook() {
    this.availableCopies++;
    console.log(`Book ${Book.title} returned`);
  }
}

//creating library class
class Library {
  constructor(name) {
    this.name = name;
    this.book = [];
  }

  //adding a book

  addBook(book) {
    this.book.push(book);
    console.log(`Book ${book.title} added`);
  }

  removeBook(isbn) {
    const index = this.book.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      const removeBook = this.book.splice(index, 1)[0];
      console.log(`Book "${removeBook.title}" removed`);
    } else {
      console.log(`Book ${book.title} Not Found`);
    }
  }

  //Lookup Book by title

  findBookByTitle(title) {
    return this.book.find((book) => book.title === title);
  }
  //listing books

  listAllBooks() {
    console.log(`Books in ${this.name} library:`);
    this.book.forEach((book) => {
      console.log(
        `${book.title} by ${book.author} - isbn: ${book.isbn} - Available Copies: ${book.availableCopies}`
      );
    });
  }
}

const book1 = new Book(
  "To Kill A Mockingbird",
  "Harper Lee",
  "978-0-06-112008-4",
  1
);

const book2 = new Book("1984", "George Orwell", "978-0-452-28423-4", 1);

const book3 = new Book(
  "The Great Gatsby",
  "F Scott Fitzgerald",
  "978-0-7432-7356-5",
  1
);

const book4 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J K Rowling",
  "9978-1-4088-5564-6",
  1
);

const book5 = new Book("The Hobbit", "J R Tolkien", "978-0-2611-0253-7", 1);
//console.log("hello world");

const library = new Library("Des");

//adding books
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

//listing books>>
//library.listAllBooks();

//borrow book
//book1.borrowBook();

//finding a book
//book2.findBookByTitle();

//removing a book >>
//library.removeBook("9978-1-4088-5564-6");

// const foundBook = Library.findBookByTitle("The Great Gatsby");
// console.log("Found Book:", foundBook);
