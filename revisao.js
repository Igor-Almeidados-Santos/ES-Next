//Let e Const
{
    var a = 2;//Var não possui escopo de bloco por isso é acessível em qualquer lugar do código.

    let b = 3; //let possui escopo de bloco ou seja ela só está acessivel no bloco em que foi definida ou nos filhos deste bloco

    {
        console.log(b);//Como este bloco é filho do primeiro ele tem acesso a variável b
    }
};

console.log(a);//Var será acessível aqui.

//Operador Destructuring

//string
const [l, e, ...tras] = "oi Igor";//A primeira e a segunda letra será adicionada a L e E, as outras letras e o espaço em branco seram adicionadas em uma posição do array;
console.log(tras, l, e);

//array
const [x, y] = [1, 2];
console.log(x, y);

//objeto
const {idade: i, nome} = {nome: 'Ana', idade: 19};
console.log(i, nome);

//Arrow Function
const soma = (a, b) => a + b;//Arrow function são funções anonimas associadas a uma constante e de retorno implicito no caso de não ter corpo.
console.log(soma(2, 3));

//Arrow function(this)
const lexico1 = () => console.log(this === exports);//O this sempre apontará para exports em uma função tradicional this aponta para global.

const lexico2 = lexico1.bind({});//Mesmo neste caso tentando forçar a função para apontar para um objeto ele continuará apontando para exports.

//Parâmetros default
function log(texto = 'node') {
    console.log(texto);
};

log();//Nesta chamada ele imprime o valor padrão setado no parâmeto da função.

log('Sou mais forte');//Nesta chamada ele imprime o valor passado na propria chamada substituindo o valor padrão.

//Operador rest
function total(...numeros) {//Junta totos os parametros passados em um array interno da função.
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
};

console.log(total(2, 3, 8, 10));

//Object.values/Object.entries
const obj = {a:1, b:3, c: 4};
console.log(Object.values(obj));//Mostra um array com os valores que estão presentes no objeto.
console.log(Object.entries(obj));//Retorna um array de arrays contendo os conjuntos chave e valor neles.

//Class
class animal {};//Uma classe internamente é convertida em uma função.

class Cachorro extends animal{//extends define outro objeto como herança.
    falar(){
        return "au au!"
    }
};

console.log(new Cachorro().falar());