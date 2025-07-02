import mysql from 'mysql2';


const banco = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "db_final_boss",
});


banco.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso");
  }
});

export default banco