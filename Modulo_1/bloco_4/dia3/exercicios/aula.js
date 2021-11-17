// let soma = 0

// for (let index = 1 ; index <= 1000; index ++) {
//     soma = soma + index
// }
// console.log(soma) 

let divisivel = 0

for (let index = 2 ; index <= 150; index ++){
    if (index % 3 === 0) {
        divisivel = divisivel +1 
    } 
}
if (divisivel === 50){
    console.log("Olá Mundo")
}
console.log(divisivel)