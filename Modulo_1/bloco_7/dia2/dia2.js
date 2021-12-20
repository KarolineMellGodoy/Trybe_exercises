const person = {
    name: 'Heder',
    lastName: 'Godoy',
}

// console.log(`Olá querido ${person.name}!`);
// console.log(`Olá Senhor ${person['lastName']}!`);
// console.log(`Olá querido ${person.name} ${person.lastName}!`);

person.age = 78;
person['isBeautifil'] = true;

// console.log(Object.keys(person));
// console.log(`Pessoa: ${Object.values(person)}`);
// console.log(Object.values(person));
// console.log(`Pessoa: ${Object.entries(person)}`);
console.log(Object.entries(person));