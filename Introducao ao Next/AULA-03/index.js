const express = require("express");
const app = express();
const port = 5000;
const mysql = require("mysql");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require("path");
const caminho = path.join(__dirname, "pages");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodebercario",
});

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    // console.log('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log("Conexão com sucesso!");
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});

app.post("/bebes/atualizar", (req, res) => {
    const id = req.query.idValor;
    const nome = req.query.nome;
    const sexo = req.query.sexo;
    const mae = req.query.nomeMae;

    const sql = `UPDATE bebe 
                    SET nome_bebe = '${nome}', 
                    sexo = '${sexo}', 
                    nome_mae = '${mae}' 
                    WHERE id_bebe = ${id}`;
    connection.query(sql, (err) => {
        if (err) {
            console.log("Erro ao atualizar o bebê:", err);
            // res.status(500).send("Erro ao atualizar o bebê");
            // return;
        } else {
            console.log("Bebê atualizado com sucesso!");
            res.status(200).sendFile(`${caminho}/home.html`);

        }
    })

});

app.get("/bebe/:id", (req, res) => {
    const id = req.params.id;
    
    const sql = `SELECT * FROM bebe WHERE id_bebe = ${id}`;
    
    connection.query(sql, (err, dados) => {
        if (err) {
        console.error("Erro ao consultar o bebê:", err);
        // res.status(500).send("Erro ao consultar o bebê");
        return;
        } else{
            res.json(dados[0]);
        }

    }); 
    
});

app.get("/bebe/editar/:id", (req, res) => {
    res.status(200).sendFile(`${caminho}/editarbebe.html`);
});

app.get("/bebes/excluir/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM bebe WHERE id_bebe = ${id}`;

    connection.query(sql, (err) => {
        if (err) {
        console.error("Erro ao excluir o bebê:", err);
        return;
        }
        console.log("Bebê excluído com sucesso!");
        res.status(200).sendFile(`${caminho}/home.html`);
    });
});

app.get("/bebes", (req, res) => {
  const sql = "SELECT * FROM bebe";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao consultar os bebês:", err);
      res.status(500).send("Erro ao consultar os bebês");
      return;
    }
    // res.status(200).json(results);
    res.json(results).sendFile(`${caminho}/home.html`);
  });
});


app.post("/bebe/insert", (req,res) => {
    const nome = req.body.nome;
    const sexo = req.body.sexo;
    const mae = req.body.nomeMae;

    const sql = `INSERT INTO bebe (nome_bebe, sexo, nome_mae) 
                VALUES ('${nome}', '${sexo}', '${mae}')`

    connection.query(sql, (err) => {
        if (err) {
            console.log("Erro ao inserir o bebê:", err);
            // res.status(500).send("Erro ao inserir o bebê");
            return;
        }
        console.log("Bebê inserido com sucesso!");
        res.status(201).redirect("/home");
        
    })
});

app.get("/bebe/cadastrar", (req, res) => {
  res.status(200).sendFile(`${caminho}/cadastrarbebe.html`);
});

app.get("/", (req, res) => {
  res.status(200).sendFile(`${caminho}/home.html`);
});

app.get("/home", (req, res) => {
  res.status(200).sendFile(`${caminho}/home.html`);
});


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(`${caminho}/404.html`));
});
