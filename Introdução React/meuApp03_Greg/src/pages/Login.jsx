import Alert from "react-bootstrap/Alert";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div className="mt-3 mx-auto w-50">
     <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha:</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button className="d-flex justify-content-center align-items-center" variant="primary" type="submit">
        Submit
      </Button>

    </Form>

      <Alert variant="danger">
        Hackearam meu email, Hackearam meu site
      </Alert>
    </div>
  );
};

export default Login;
