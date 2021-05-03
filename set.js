//Set não aceita repetição e não é indexado, ou seja ele não acessa o indice dos elementos.

const times = new Set();
times.add('Vasco');
times.add('São Paulo');
times.add('Vasco');//Como o set não aceita repetição só sdiciona vasco 1 vez.

console.log(times);
console.log(times.size);
console.log(times.has('Vasco'));

const nomes = ['Raquel', 'Lucas','Júlia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);