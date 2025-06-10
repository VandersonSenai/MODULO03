import conn from "../conexao.js"

export const buscarUsuarios = (req, res) =>{
    const sql = `SELECT * FROM usuarios`

    conn.query(sql, (erro, result) => {
        if(erro){
            res.status(500).json(erro).end()
        }
        else{
            res.status(200).json(result).end()          
        }
    })
}