// Importando o modulo no NPM
const minimist = require('minimist');

// Importando o módulo interno sistema de arquivos
const fs = require('fs');

// carregando o arquivo com nosso módulo
const moduloSoma = require('../modulo_interno');

// Guardando os argumentos passados na linha de comando
// e separando os argumentos passados na linha de comando
const args = minimist(process.argv.slice(2));

// Definindo uso de funcão interna do modulo importado.
const funcSoma = moduloSoma.soma;

// Gardando os argumentos passados na linha de comando em variáveis 
const a = parseInt(args['a']);
const b = parseInt(args['b']);

const resultado = funcSoma(a, b);
console.log(`Resultado da soma: ${resultado}`);
// Guardando o resultado em um arquivo  
fs.watchFile('resultado.txt', resultado, "utf8", (err, data) => {
    if (err) {
        console.log("Erro ao escrever no arquivo | ", err);
    } else {
        console.log("Informação escrita em disco!");
    }
});