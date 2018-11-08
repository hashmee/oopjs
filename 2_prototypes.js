function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function(){
  return `${this.title} was written by ${this.author}
    in ${this.year}`
}

// Data manipulation
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
  return this;
}

const b1 = new Book('book1', 'abdul munaf', '2013');
// console.log(b1.getSummary());
console.log(b1.revise('2018'));
