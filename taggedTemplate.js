//tagged template processa uma template dentro de uma função.
function tag(partes, ...valores){
    console.log(partes);//Mostra as partes da string em uma array sem as partes que foram interpoladas.
    console.log(valores);//Os valores são as constantes interpoladas na template. Também são apresentadas em um array.
    return 'Outra String';//Retorna uma string diferente da template.
};

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}`);