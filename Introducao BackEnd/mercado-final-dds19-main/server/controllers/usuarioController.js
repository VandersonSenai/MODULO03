import conexao from "../conexao.js";

export const buscarUsuarios = (req, res) => {
    const sql = "SELECT * FROM usuarios";

    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao buscar usuário:", erro);

            res.status(500).json(error).end();
        } else {
            console.log(resultado)
            res.status(200).json(resultado).end();
        }
    });
}
// const buscarUsuario = (req, res) => {
//     const { id } = req.params;

//     conexao.query("SELECT * FROM usuario WHERE id = ?", [id], (erro, resultado) => {
//         if (erro) {
//             console.error("Erro ao buscar usuário:", erro);
//             return res.status(500).json({ error: "Erro ao buscar usuário" });
//         }

//         if (resultado.length === 0) {
//             return res.status(404).json({ error: "Usuário não encontrado" });
//         }

//         res.status(200).json(resultado[0]);
//     });
// }