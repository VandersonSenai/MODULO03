// Como usar módulos externos e internos no Node.js
// Importando o módulo interno
// Recebendo os argumentos passados na linha de comando
// Separando os argumentos passados na linha de comando
// Usando nosso proprio módulo para processar os argumentos
// ./modulo_interno => modulo_interno => modulo_interno.soma(a, b)

// Importando o módulo externo 
const minimist = require('minimist');
const modulo_interno = require('./modulo_interno');
// corta os primeiros dois argumentos
const args = minimist(process.argv.slice(2));

// exibe os argumentos passados na linha de comando
console.log("\n Argumentos | ", args);

// Testando o módulo externo
// $ node index.js --a=10 --b=25 --chave=fraca

// Resposta esperada
// Argumentos |  { _: [], a: 10, b: 25, chave: 'fraca' } 


const a = parseInt(args['a']);
const b = parseInt(args['b']);

console.log(modulo_interno.soma(a, b));