//Faz um código asíncrono parecer sincrono ou seja ele só executa a próxima linha quando termina a primeira execussão.
const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
    
            res.on('data', dados => {
                resultado += dados;
            });
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                }catch(e){
                    reject(e);
                }
            });
        });
    }); 
};

let obterAlunos = async () => {//Um codigo marcado com async retorna uma promise
    const ta = await getTurma('A');//O await retorna o resultado da promise
    const tb = await getTurma('B');
    const tc = await getTurma('C');

    return [].concat(ta, tb, tc);
};//Retorna um objeto AsyncFunction.

//Para acessar o resultado de um código marcado com async/await deve-se chamar sempre o then.
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))