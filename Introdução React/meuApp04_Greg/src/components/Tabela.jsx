// Importação dos componentes do Bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {GetFuncionarios} from "../hooks/useApi.js"

const Tabela = () => {
  const funcionarios = GetFuncionarios()
  console.log("Dados vindos da funcao getFuncionarios: ", funcionarios)
  return (
    <div  style={{ width: "80%", margin: "auto" }}>
      <h1>Tabela</h1>
      <Button className="c-flex mb-3  w-100 mx-auto" variant="primary"
        onClick={ () => {
          window.location.reload()
        }}> reload
       </Button >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
          {/* funcionarios.map é uma função de seta onde atribuímos o conteudo para uma segunda variavel funcionário */}
          {funcionarios.map((funcionario)=>(
              <tr key={funcionario.id}>
                <td>{funcionario.id}</td>
                <td>{funcionario.nome}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.tipo}</td>
                <td><button>Edit</button></td>
              </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabela;
