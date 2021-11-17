/* Exercicio 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
 */

const a = 17;
const b = 5;

console.log('soma ' + (a + b));
console.log('Subtração ' + (a - b));
console.log('Multiplicação ' + (a * b));
console.log('Divisão ' +(a / b));
console.log('Modulo ' + (a % b))

console.log('\n');


/* Exercicio 2 - Faça um programa que retorne o maior de dois números.
 Defina, no começo do programa, duas constantes com os valores que serão comparados. */

const a = 22;
const b = 25;

if (a > b){
    console.log('a é maior que b');
} else {
    console.log("'b' é maior que'a'");
};

console.log('\n');

/* Exercicio 3 - Faça um programa que retorne o maior de três números.
 Defina, no começo do programa, três constantes com os valores que serão comparados. */

 const a = 30
 const b = 50
 const c = 8

 if (a > b && a > c){
    console.log('O maior numero é: ' + a + 'a');
 } else if (b > a && b > c){
     console.log('O maior numero é: ' + b + 'b');
 } else {
    console.log('O maior numero é: ' + c + 'c');
 };

 console.log('\n');

/*  Exercicio 4 -Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, 
 "negative" se for negativo e "zero", caso contrário. */

 let number = -7

 if (number > 0) {
     console.log('positive')
 } else if( number < 0){
     console.log('negativo')
 } else {
     console.log('zero')
 }

 console.log('\n');

 /*  Exercicio 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
 em conceitos de A a F. Siga essas regras:

 Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor 
que 0 ou maior que 100. */

let nota = 88;

if(nota < 0 || nota > 100){
    console.log('Erro, nota incorreta!');
} else if(nota >= 90){
    console.log('A');
} else if(nota >= 80){
    console.log('B');
} else if(nota >= 70){
    console.log('C');
} else if(nota >=60){
    console.log('D');
} else if(nota >=50){
    console.log('E');
}

console.log('\n');

/* Exercicio 8 -Escreva um programa que defina três números em variáveis no seu começo e retorne 
true se pelo menos uma das três for par. Caso contrário, ele deve retornar false. */

const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

console.log('\n');

/* Exercicio 9 -Escreva um programa que defina três números em variáveis no seu começo e retorne 
true se pelo menos uma das três for impar. Caso contrário, ele deve retornar false. */

const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isEven = true;
};
console.log(isEven);

console.log('\n');

/* Exercicio 10 - Escreva um programa que se inicie com dois valores em duas constantes 
diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto 
de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

-Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no 
cálculo do lucro.

-Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores 
de entrada seja menor que zero.

-O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo
que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const custo = 50;
const venda = 100;

if(custo >= 0 && venda >= 0){
    const totalcusto = custo * 0.2;
    const totalproduto = (venda - totalcusto) * 1000;
    console.log(totalproduto);
} else {
    console.log("Error, os valores não podem ser negativos")
};

console.log('\n');