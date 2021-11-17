/* Parte I - Objetos e For/In */

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
 Valor esperado no console: */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem Vinda,", info.personagem);

/* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
    for(let index in info)
  console.log(index)
/* 
  4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console */

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
    for(let index in info)
  console.log(info[index])

 /*  6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um
   console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". */

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],

  };
    console.log('O livro favorito de ' + leitor.nome + leitor.sobrenome + ' se chama ' + livrosFavoritos[0].titulo);

/*     7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um
    objeto contendo as seguintes informações:    */

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
          {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editor: 'Rocco',
          },
        ],        
      };

/* 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato:
 "Julia tem 2 livros favoritos".  */  

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
        {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editor: 'Rocco',
        },
        ],        
    };
    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

/* Parte II - Funções */



function indiceMaior (array){
  let indiceMaior = 0;
  for(let indice in array)
   if(array[indiceMaior] < array[indice]) {
    indiceMaior = indice;
 }
 console.log(indiceMaior)
}

indiceMaior([0, 1, 2, 113, 4, 10, 1])
