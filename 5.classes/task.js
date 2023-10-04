class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value > 100) {
      this._state = 100;
    } else if (value < 0) {
      this._state = 0;
    } else {
      this._state = value;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

let book = new PrintEditionItem("Гарри Поттер", "12-02-2000", 400);
let mag = new Magazine("Космополитан", "12-12-2023", 100);
console.log(mag["type"]);

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }

    }
    findBookBy(type, value){
      for(let i = 0; i < this.books.length; i++){
       if(this.books[i][type] === value){
        return this.books[i];
       }
      }
      return null;
    }
    giveBookByName(bookName){
      let book = this.findBookBy("name",bookName)
      if(book){
        let i = this.books.indexOf(book);
        this.books.splice(i,1)
      }
      return book;
    }
}