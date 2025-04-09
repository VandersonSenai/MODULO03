import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const Cadastro = () => {
  return (
    <div className='p-3'>
      

      <FloatingLabel
        controlId="floatingInput"
        label="Nome : "
        className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email : "
        className="mb-3">
        <Form.Control type="email" placeholder="" />

      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Senha">
        <Form.Control type="password" placeholder="" />
      </FloatingLabel>

      <div>
       {/* caixa de envio de arquivos */}
        <hr />
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Selecione uma imagem para envio</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      </div>
      <div>

       {/* caixa de Seleção */}
        <hr />
        <Form.Label>Tipo de usuário</Form.Label>
        <Form.Select aria-label="Default select example">
          {/* <option>Tipo de usuário</option> */}
          <option value="1">Administrador</option>
          <option value="2">FuncionárioTwo</option>
          <option value="3">Gerente</option>
        </Form.Select>
      </div>
    </div>
    
    
  );
};

// export default Cadastro;
