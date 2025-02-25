import {promises as fs} from 'fs';

import path from 'path';
import url from 'url';

var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

// Criando um diretório.
//await fs.mkdir(path.join(__dirname,'lojas', '201', 'funcionarios'));

// Tenta criar o diretório, em caso de erro , trata a matchesGlob.
try {
    await fs.mkdir(path.join(__dirname,'lojas', '201', 'funcionarios'));
} catch (error){
    console.error(`Erro ao criar diretório [${__dirname}] - código: ${error.code}`);
    console.error(`Erro ao criar pasta, código do erro: ${error.code} \n ${__dirname}]`);
}

//await fs.mkdir(path.join(__dirname,'lojas', '201', 'funcionarios'));

console.log(path.join(__dirname,'lojas', '201', 'funcionarios'));