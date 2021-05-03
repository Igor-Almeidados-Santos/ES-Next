//Promise é usada quando se quer ter um processamento assincrono. Ela retorna dois resultados, resolve(resolvido) ou reject(rejeitado).
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//Resolve aceita apenas um parâmetro.
        }, segundos * 1000);
    });
};

falarDepoisDe(3, 'Vai dar tudo certo!')
    .then(frase => frase.concat('?!?'))//Then acessa o resultado da promise
    .then(outraFrase => console.log(outraFrase))//Voce pode encadiar then sendo que o proximo sempre concatena o resultado do anterior.

    // .catch(e => console.log(e));//Usa para tratar um erro caso a chamada seja reject e não resolve.