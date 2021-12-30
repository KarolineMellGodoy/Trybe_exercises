//DIA 1

// const funcao1 = () => "Acordando!";
// const funcao2 = () => "Bora tomar café!";
// const funcao3 = () => 'Partiu dormir!';

// const doingThings = (tarefasDia) => {
//     const result = tarefasDia();
//     console.log(result);
// };

// doingThings(funcao1);
// doingThings(funcao2);
// doingThings(funcao3);

// ---------------------------------------

/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 
Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve 
receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_
pessoa@trybe.com .
 */

// const newEmployees = (cadastro) => {
//   const employees = {
//     id1: cadastro('Pedro Guerra','19 99278-7217', {dançar: 'pagode' , comidas: 'Pizza'}), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: cadastro('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: cadastro('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//     return employees;
// };

// const cadastro = (fullName, telefone, hoobie) => {
//   const email = fullName.toLowerCase().split(' ').join('_');
//   return{fullName, email: `${email}@betrybe.com`, telefone, hoobie};
// }

// console.log(newEmployees(cadastro));

// -------------------------------------------

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou" */

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Parabens!' : 'Tente Novamente!';
// };

// console.log(lotteryResult(2, numberChecker))

//------------------------------------------------------------

/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função
 que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao 
 final a HOF deve retornar o total da contagem de respostas certas.

Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver 
resposta ("N.A") não altera-se a contagem. */

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const repeat = (result1, result2, result3) => {
//   let contador = 0;
//   for (let index = 0; index <= result1.length; index += 1) {
//     const return1 = result3(result1[index], result2[index]);
//     contador += return1;
//   }
//   return `Resultado final: ${contador} corretas`;
// };

// console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (cont1, cont2) => {
//   if (cont1 === cont2){
//     return 1;
//   } if (cont2 === 'N.A') {
//     return 0;
//   }
//   return -0,5;
// }));

//-----------------------------------------------------

//DIA 2

/* const students = [
  {name: 'Maria', grade:70, approved: ''},
  {name: 'Camila', grade:50, approved: ''},
  {name: 'Juliana', grade:80, approved: ''},
  {name: 'Murilo', grade:30, approved: ''},
]; */

// function verNotas(){
//   for (let index = 0; index < students.length; index += 1) {
//     const result = students[index];
//     if (result.grade >= 60) {
//       result.approved = 'Aprovado';
//     } else{
//       result.approved = 'Recuperação'
//     }
//   }
// }  *** Maneira de fazer o FOR com a escrita grande

// function verNotas(){
//   students.forEach((result, index) => {
//     if (result >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = "Recuperação";
//     }
//   });
// } *** maneira de fazer o for mais pratico com Higher Order Functions

// verNotas();

// console.log(students);

/* const cadastro = ['Karoline', 30, '69kg', {comida: 'Japonesa' }];
cadastro.forEach((element) => {
  console.log('Cada elemento do Array:', element);
});
 */
 // -------------------------------------------------
/* 
const cadastroEmail = [
  'murilo@gmail.com',
  'karoline@gmail.com',
  'amanda@gmail.com',
  'diego@gmail.com'
];
cadastroEmail.forEach((element, posicao, array) => {
  console.log(`Email enviado: ${element}`);
  console.log(`Posicao candidato: ${posicao}`);
  console.log(`Total candidatos: ${array.length}`);
});
 */
//----------------------------------------------------

/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabuada = (element) => {
  console.log(`Tabuada: 2 *  ${element} = ${element * 2}`);
};

numbers.forEach(tabuada); */

//----------------------------------------------------------

/* 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((Object1, Object2) => Object1.age - Object2.age);

console.log(people);
 */