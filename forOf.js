//O for of itera com os valores de strings, arrays, objetos, etc.
for(let letra of "Cod3r"){
    console.log(letra);
};

const assuntosEcma = ['Map', 'Set', 'Promise'];

//For in itera com os indices.
for(let i in assuntosEcma){
    console.log(i);
};

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
]);

for(let assunto of assuntosMap){//Mostra o array de cada conjunto chave e valor.
    console.log(assunto);
};

for(let chaves of assuntosMap.keys()){//Mostra apenas as chaves.
    console.log(chaves);
};

for(let valor of assuntosMap.values()){//Mostra apenas os valores.
    console.log(valor);
};

for(let [ch, vl] of assuntosMap.entries()){//Desestrutura cada array de chave e valor do map e separa em variáveis.
    console.log(ch, vl);
};

const s = new Set(['a', 'b', 'c']);
for(let letra of s){
    console.log(letra);
};