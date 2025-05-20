console.log("teste de console");

let a = 7;
let b = 77;

console.log(a + b);

let itGo = "Let it go";
console.log(itGo);
console.log(itGo.length);   

console.log(itGo.toUpperCase());
console.log(itGo.toLowerCase());

console.log(`O nome  da princesa é ${itGo}`);

// retornas os argumentos passados na linha de comando como "nome do executável" e "nome do script" e algum parâmetro adicional passado no momento da execução.


// console.log(process.argv);
let arg1 = process.argv[2];
let arg2 = process.argv[3];
let arg3 = process.argv.slice(2);
// let alimento = process.argv[2].split("=")[1];

// let argumentos = process.argv.slice(2).map(arg => arg.split("="));

let argumentos = process.argv.slice(2);
let alimento = argumentos[2].split("=");

// exemplo de comando com passagem de argumento
// $node script.js "comida=bife" "comida=frango" "comida=sushi"
// $node script.js "comida=frango"


console.log(" [1] Argumento | ",arg1);
console.log(" [2] Argumento | ",arg2);
console.log(" [3] Argumento | ",arg3);

console.log(" [4] Argumento | ",alimento);