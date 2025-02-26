import {promises as fs} from 'fs';

import path from 'path';
import url from 'url';

var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

var arquivo = path.join(__dirname, "totalVendas.json");

try {
    var buffer = await fs.readFile(arquivo);
    
    //  Exibe o arquivo em Hexadecimal
    console.log(buffer);    
    console.log('\n');  
    //  Exibe o arquivo em String
    console.log(buffer.toString());  
    console.log('\n');  
    //  Exibe o o valor na chave total
    console.log('Total: ',JSON.parse(buffer).total);    
    console.log('\n');    
    //  Exibe o o valor na chave alunos
    console.log('Alunos: ', JSON.parse(buffer).alunos);   
    console.log('\n');     
    //  Exibe o o valor na chave nomes
    console.log('Alunos: ', JSON.parse(buffer).nomes);    

    if (fs.existsSync(buffer)) {
        // File exists in path
        console.log('File exists in path');
      } else {
        // File doesn't exist in path
        console.log('File doesnt exist in path');
      }

} catch (error) {
    console.log('Erro ao ler aquivo: ', error);
}