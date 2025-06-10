import mysql2 from 'mysql2'

const conn = mysql2.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    database:"sap_2025_1"
})

conn.connect( (erro) =>{
    if(erro){
        console.log(erro);
    }
    else{
        console.log("Conectado com sucesso ao banco")
    }
})

export default conn