import { promises as fs } from "fs";

import path from "path";
import url from "url";

var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

var arquivo = path.join(__dirname, "Boas_vindas.txt");

try {
    // Adiciona uma linha ao arquivo existente.  
    await fs.appendFile(arquivo, "Saudações3!!!");
    await fs.watch
    // Cria um arquivo ZERO ou sobrepõe.  
    //await fs.writeFile(arquivo, "Saudações!!!");
    console.log("Arquivo Criado com Sucesso!!!");
} catch (error) {
  console.log("Erro ao criar arquivo, error");
}
