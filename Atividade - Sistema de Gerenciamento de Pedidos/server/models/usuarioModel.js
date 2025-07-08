import banco from "../config/conect.js"; 

export const buscarUsuarios = (callback) => {
  const sql = `SELECT * FROM usuarios`;
  banco.query(sql, callback);
};

export const inserirUsuario = (usuario, callback) => {
  const sql = `
    INSERT INTO usuarios (nome, email, tipo, senha)
    VALUES (?,?,?,?)
    `;
  const valores = [
    usuario.nome,
    usuario.email,
    usuario.tipo,
    usuario.senha,
  ];
  banco.query(sql, valores, callback);
};

export const buscarUsuarioPorId = (id, callback) => {
  const sql = `SELECT * FROM usuarios WHERE id = ?`;
  banco.query(sql, [id], callback)
};

export const atualizarUsuario = (id, usuario, callback) =>{
  const sql = `
  UPDATE usuarios
  SET nome = ?, email = ?, tipo = ?, senha = ?
  WHERE id = ?`;
    const valores = [
    usuario.nome,
    usuario.email,
    usuario.tipo,
    usuario.senha,
    id
  ];
  banco.query(sql, valores, callback);
}