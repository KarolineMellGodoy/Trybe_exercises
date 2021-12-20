// ----------arrow functions-------------

// const soma = function soma (num1, num2){
// return num1 + num2;
// }
// console.log(soma(2, 2));

// const soma = (num1, num2) => num1 + num2;
    
//   console.log(soma(2, 2);





// const contaPalavras = frase => frase.split(' ').length;

// console.log(contaPalavras('Fala tribo, beleza?'));

// const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});

// console.log(objetoPessoa('Karoline', 30));

// const multiplicacao = number => number * 2;
// console.log(multiplicacao(2));  

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

// ------------ternary operator-------------

// const ckeckTenary = (age) => (
//   age >= 18 ? `você tem idade para dirigir` : `Voce tem não tem idade para dirigir...`
// );
// console.log(checkTenary);


// -----------exercicio do dia --------------

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     console.log(ifScope + ' ótimo, fui utilizada no escopo !');
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope + ' o que estou fazendo aqui ? :O');
//   }
//   console.log(ifScope + elseScope); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// ------------------------------------

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArray = array => {
//   const sortOddArray = array.sort((a,b) => a - b);
//   return sortOddArray;
// }
// const sorteArrayBonus = sortArray (oddsAndEvens);
// console.log(`Os números ${sorteArrayBonus} se encontram ordenados de forma crescente !`);


/* 2- Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:
Copiar
      "Antônio foi no banheiro e não sabemos o que aconteceu" // retorna 'aconteceu'

function contaPalavras (frase){
    let resultado = frase.split(' ');
    let maiorPalavra = '';
       for (let i = 0; i < resultado.length; i += 1){
       if (resultado[i].length > maiorPalavra.length){
           maiorPalavra = resultado[i];
       }     
       }
       return maiorPalavra;
   }
   
   console.log(contaPalavras('Antônio foi no banheiro e não sabemos o que aconteceu')); */

   

   Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá 
   procurar pela letra x em uma string qualquer que você determinar e substituir pela string que 
   você passou como parâmetro. Sua função deve retornar essa nova string .

   Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

    Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar 
    as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem 
    alfabética. Sua função deve retornar essa nova string .



  const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

   function primeira (nome){
       let fun1 = subNome => (
        `Tryber ${subNome} aqui!`
       );
    
    let result = `${fun1(nome)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) => result = `${result} - ${skill}`);

    result = `${result} #goTrybe`;
    return result;
   }
console.log(primeira('Lucas'));