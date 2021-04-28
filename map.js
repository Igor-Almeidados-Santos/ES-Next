//No Map a chave pode ser uma função, objeto, número, etc.
const tecnologias = new Map();
tecnologias.set('React', {framework: false});
tecnologias.set('Angular', {framework: true});

console.log(tecnologias.React);//Irá gerar um erro pois esta não é a forma de acessar um elemento do map.

console.log(tecnologias.get('React').framework);//Esta é a forma de acessar um elemento do Map

//Forma de crair um map literal.
const chavesVariadas = new Map([
    //Exemplos de chaves variadas possiveis no Map.
    [function() {}, 'Função'], 
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);//O Map também possui uma função delete.
console.log(chavesVariadas.size);//Mostra a quantidade de elementos no Map.

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');//No map não pode haver chaves duplicadas então ele substitui os valores pelo ultimo que foi setado com essa chave.