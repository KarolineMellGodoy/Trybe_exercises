//--------------------------------------------DIA 1------------------------

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

//---------------------DIA 2-----------------------------------

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

// -----------------------------------DIA 3----------------------------------------

// FILTER

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const isEvent2 = numbers.filter((number) => number % 2 === 0);

console.log(isEvent2); */

//-----------------------------------------------------------

// deseja-se apenas as pessoas que não possuem ainda idade para dirigir:

/* const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

  const verifyAgeDrive = (arrayPeople) => (
      arrayPeople.filter((people) => (people.age < 18))
  );

  console.log(verifyAgeDrive(objPeople)); */

  //-----------------------------------------------------------

   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

/* const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Karoline', 'Murilo'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
 

const newListStudents = removeStudentByName('Karoline', arrayMyStudents);
console.log(newListStudents); */

//-----------------------------------------------------------------

//EXEMPLO VIDEO CORSE

/* let listaDePessoasAprovadas = [
  'murilopacos@gmail.com',
  'karolinemell@gmail.com',
  'barbaranadreotti@gmail.com',
  'diegozanni@gmail.com',
]

const enviarEmail = (objetoEmail) => {
  console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
};

let listaDeEmails;

listaDeEmails = listaDePessoasAprovadas.map((email) => {
  return { email: email, nota: 10 };
});

listaDeEmails.forEach((objetoEmail) => enviarEmail(objetoEmail)); */

// ***** exercios do Map fiz somente dos livros em outro arquivo.

//--------------------------------------- DIA 4 ----------------------------------

//REDUCE

/* 
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

//COM REDUCE 

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113 */

//------------------------------------------------------------------------------

/* 
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123
 */








// ---------------------------------------- DIA 5 ----------------------------------

// SPREAD OPERATOR

/* 
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
 */
// -------------------------------------------------------------
/* 
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// ---------------------------------------------------------------
/* 
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
 */
// ----------------------------------------------------------------
/* 
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
 */
// ----------------------------------------------------------------
/* 
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

// ------------------------------------------------------------------
/* 
const specialFruit = ['morango', 'banana', 'manga'];
const additionalItens = ['chocolate', 'leite-condensado', 'açai'];

//*** PRIMEIRA OPÇÃO RESOLVER

const fruitSalad = (fruit, additional) => {
  const addFruts = [...fruit, ...additional];
  return addFruts;
};

console.log(fruitSalad(specialFruit, additionalItens));

//*** SEGUNDA OPÇÃO RESOLVER

const addFruits = [ ...specialFruit, ...additionalItens];

console.log(addFruits); */

//------------------------------------------------------------------

// Rest

/* 
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
 */

//------------------------------------------------------------------

/* 
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
 */

//------------------------------------------------------------------

// Object Destructuring
/* 
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

 */

//----------------------AULA AO VIVO - REDUCE --------------------
/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaFiltrados = numbers
  .filter((item) => item < 8 )
  .reduce((acumulador,item) => acumulador + item);

  console.log(somaFiltrados);
 */
  //**** ESSA SOMA TBM DÁ CERTO COM JUNTAR PALAVRAS

  -----------------------------------------------------------------------------------

  /* 
function getOldestFromFirstSpecies(id) {
  const oldestAnimal = species.find((specie) => specie.id === employees // find filtrar o id dentro do employees
    .find((employee) => employee.id === id) // o que foi filtrado da id entre species e employees achar o que é igual
    .responsibleFor[0]).residents // em employees achar o responsibleFor e com o nomes dos animais no array acha em residents os animais
    .sort((a, b) => b.age - a.age)[0]; // coloca em ordem os animais 

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age]; */

  