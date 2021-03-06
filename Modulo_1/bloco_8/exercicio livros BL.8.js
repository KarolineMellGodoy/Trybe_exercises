const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// ----------------- FILTER / MAP --------------------------------------------

/* 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
Dica: Use a função map */

/* function formatedBookNames() {
 return books.map((book) => `Nome: ${book.name} Genero: ${book.genre} Autor: ${book.author.name}`);
}

console.log(formatedBookNames());
 */

/* 
2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author 
, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi 
lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando
 suas idades quando o livro foi lançado.

Dica: use as funções map , sort
 */

/* 
function nameAndAge() {
  return books.map((book) => ({age: book.releaseYear - book.author.birthYear, author: book.author.name}))
  .sort((Object1, Object2) => Object1.age - Object2.age);
}

console.log(nameAndAge());
 */

/* 
3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
Dica: use a função filter ;
 */

/* 
function fantasyOrScienceFiction() {
  return books.filter((book) => (book.genre == 'Fantasia' || 'Ficção Científica'))
}

console.log(fantasyOrScienceFiction());
 */

/* 
4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e 
ordene-o pelo livro mais velho.

Dica: use as funções filter e sort
 */

/* 
function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (
    book.releaseYear < currentYear - 60
  )).sort((Object1, Object2) => Object1.releaseYear - Object2.releaseYear);
}

console.log(oldBooksOrdered());
 */

/* 
5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas
 autoras de ficção científica ou fantasia.
 */

/*  
 function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
  .filter((book) => (wantedGenres.includes(book.genre)))
  .map((book) => book.author.name).sort();
 }

console.log(fantasyOrScienceFictionAuthors());
*/

// -------------------------------------------------

/* 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
Dica: use a função find .
 */

/* function authorBornIn1947() {
 return books.find(livro => livro.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());
 */
/* 2 - Retorne o nome do livro de menor nome.
Dica: use a função forEach . */
/* 
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
} */

/* 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
 */

/* function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());
 */

/* 
4 - Ordene os livros por data de lançamento em ordem decrescente. */

/* books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);

console.log(books); */

/* 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. */

/* const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => (
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  ));
}
console.log(everyoneWasBornOnSecXX()); */

/* 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário. */

/* const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
  }  
 */

/* 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário. */

/* const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));  
} */

