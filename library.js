"use strict";
//Book Class

class Book {
  constructor(title, author, isbn, availableCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.availableCopies = availableCopies;
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

const library = [book1, book2, book3, book4, book5];
