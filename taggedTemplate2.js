//Modificando uma template string.

function real(partes, ...valores){
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.tofixed(2)}`;//Modifica cada valor de acordo com o modelo.
        resultado.push(partes[indice], valor);//Coloca cada valor no array.
    });

    return resultado.join('');//Reconstroi uma string com os valores modificados.
};

const preco = 29.9;
const precoParcela = 11;

console.log(real `1x de ${preco} ou 3x de ${precoParcela}`);