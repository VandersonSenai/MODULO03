// import { readFile } from 'fs/promises';

// import { fs } responsável por acesso a arquivos de sistema {criar dir, ler dir, etc}
const fs = require ('fs');
const path = require ('path');
const readline = require('readline');

// console.log(fs);
// console.log(" [1] Nome do arquivo | ", __filename);

// fs.readFile('teste.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(" [2] Erro ao ler o arquivo | ", err);
//     } else {
//         console.log(" [3] Conteúdo do arquivo | ", data);
//     }
// });


// cRiando um arquivo E escrevendo uma linha no arquivo
const mensagem = "Olá, Mundo!\n";
fs.writeFile('criandoArq.txt', mensagem, 'utf-8', (err) => {
    if (err) {
        console.log(" Erro ao escrever no arquivo | ", err);
    } else {
        console.log(" Arquivo escrito com sucesso!");
    }
});

// Lendo o arquivo E escrevendo uma LINHA no arquivo
const mensagemDois = `\nOlá, Mundo3!`;
fs.appendFile('criandoArq.txt', mensagemDois, 'utf-8', (err) => {
    if (err) {
        console.log(" Erro ao escrever no arquivo | ", err);
    } else {
        console.log(" Arquivo escrito com sucesso!");
    }
});


// Deletando o arquivo
fs.unlink('criandoArq.txt', (err) => {
    if (err) {
        console.log(" Erro ao deletar o arquivo | ", err);
    } else {
        console.log(" Arquivo deletado com sucesso!");
    }
});