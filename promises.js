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


//Chamando o then apenas qunado todas as promises estiverem resolvidas.

function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max];

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo);
    });
};

function gerarVariosNumeros() {
    return Promise.all([ //Retorna um array de promises logo após todas elas serem resolvidas
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ]);
};

console.time('promise');//Inicializa um timer

gerarVariosNumeros()//Executa todas as chamadas primeiro e depois executa o then com os resultados.
    .then(console.log)
    .then(() => {
        console.timeEnd('promise');//Finaliza o timer e mostra o tempo de execussão do timer.
    });