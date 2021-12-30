const tabuada = (numero) => {
  for(index = 1; index <= 10; index += 1) {
    console.log(`${numero} * ${index} = ${numero * index}`);
  }
}
console.log(tabuada(5));

const calculadora = (num1,num2,operador) => {
  if(operador === '+') {
    console.log(num1 + num2);
  }
};

console.log(calculadora(5,5,'+'));