function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!');
        }else{
            resolve(valor);
        };
    });
};

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Value: ${v}`))
    .catch(err => console.log(`Error: ${err}`))//Trata o erro gerado na função funcionarOuNao ou nos metodos then.