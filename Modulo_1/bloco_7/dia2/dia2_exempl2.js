const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowhip',
  book2: 'Two Towers',
  book3: 'Retour of the King'  
}

const bookAuthor = {
  authorName: 'J.R.R. Tolkien',
};

console.log(books);

Object.assign(books, bookAuthor);

console.log(books);