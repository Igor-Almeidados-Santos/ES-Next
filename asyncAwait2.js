//Gerando numeros da megasena. Tratamento de erro async/await.

function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max];

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;

            if(numerosProibidos.includes(aleatorio)) {
                reject(`Número repetido!`)
            }else {
                resolve(aleatorio);
            }

        });
    });
};

async function megaSena(qtdNumeros, tentativas = 1) {
    try{

        const numeros = [];
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros));//O await sempre fica junto da função que irá retornar uma promise.
        };

        return numeros;

    } catch(e) {

        if(tentativas > 10){
            throw `Não deu certo!`
        }else {
            return megaSena(qtdNumeros, tentativas + 1)
        };

    };   
};

megaSena(6)
    .then(console.log)
    .catch(console.log)
