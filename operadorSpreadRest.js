//operador ... rest(juntar)/spread(espalhar).

//Usar spread com objeto.
const funcionario = {nome: 'Maria', salario: 12358.69};
const clone = {ativo: true, ...funcionario};//Clona todos os atributos de funcionarios e coloca no novo objeto.
console.log(clone);

//Usar spread com array.
const grupoA = ['João', 'Pedro', 'Maria'];
const grupoFinal = ['Bruno', 'Bruna', 'Valquíria', ...grupoA];//Clona todos os elemetos do outro array.
console.log(grupoFinal);