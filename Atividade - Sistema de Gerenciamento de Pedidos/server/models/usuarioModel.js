import conn from "../config/conect.js"; // Importa a conexão do banco de dados

export const buscarUsuarios = (callback) => {
  const sql = `SELECT * FROM usuarios`;
  conn.query(sql, callback);
};

export const inserirUsuario = (usuario, callback) => {
  const sql = `
    INSERT INTO usuarios (login, nome, email, tipo, senha)
    VALUES (?,?,?,?,?)
  `;
  const valores = [
    usuario.login,
    usuario.nome,
    usuario.email,
    usuario.tipo,
    usuario.senha,
  ];
  conn.query(sql, valores, callback);
};

export const buscarUsuarioPorId = (id, callback) => {
  console.log(id)
  const sql = `SELECT * FROM usuarios WHERE id = ?`;
  conn.query(sql, [id], callback)
};

export const atualizarUsuario = (id, usuario, callback) =>{
  const sql = `
  UPDATE usuarios
  SET login = ? , nome = ?, email = ?, tipo = ?, senha = ?
  WHERE id = ?`
    const valores = [
    usuario.login,
    usuario.nome,
    usuario.email,
    usuario.tipo,
    usuario.senha,
    id
  ];
  conn.query(sql, valores, callback);
}