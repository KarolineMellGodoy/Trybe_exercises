/* Com o mesmo código do exercício anterior, caso o valor final seja maior 
que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima 
a mensagem: "valor menor ou igual a 20"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0

for(let index = 0; index < numbers.length; index +=1){
result = (numbers + [index]);
}
result = result / numbers.length

if (result > 20){
    console.log("valor maior que 20");
}else{
    console.log('valor menor ou igual a 20')
}

/* Utilizando for , descubra qual o maior valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for(let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > higherNumber){
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);

/* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado. */

let numbers = [];

for (let index = 1; index <= 25; index +=1){
    numbers.push(index);
}
console.log(numbers);

