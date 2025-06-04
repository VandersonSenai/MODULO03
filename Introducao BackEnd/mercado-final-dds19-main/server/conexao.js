import mysql2 from 'mysql2';

const conexao = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password:"",
    database: 'mercado'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco de dados:', erro);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
});

export default conexao;