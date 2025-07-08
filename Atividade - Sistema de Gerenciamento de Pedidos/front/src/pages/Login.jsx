// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


// Importando o hook useState para monitorar a mudança das variáveis
import { useState, useEffect } from "react";

//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";

// Importando o hook useForm do react-hook-form
import { useForm } from "react-hook-form";

// Importando o hook useVerificaLogin
import { useVerificaLogin } from "../hooks/useUsuario";

// Importando o icone de login
import { BsBoxArrowInRight } from "react-icons/bs";

// Importa o hook de usar um contexto
import { useContext } from "react";
// Importa o contexto de usuário
import { AuthContext } from "../contexts/UserContext";

const Login = () => {
  
  const { logout } = useContext(AuthContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const navigate = useNavigate();

  
  const { verificaLogin } = useVerificaLogin();


  const onSubmit = (data) => {
    console.log("Dados:", data);

    // envia data para o hook de verificacao de login e guarda a reposta na variavel res
    const res = verificaLogin(data);

    console.log("Dados Resposta:", res);

    // caso a resposta seja de sucesso, redireciona para a pagina home
    if (res === "Login efetuado com sucesso") {
      alert("Login efetuado com sucesso");
      navigate("/home");
    } 
    
    // caso a resposta seja de erro, mostra a mensagem retornada para o alerta
    else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem(res);
    }
  };

  //Caso tenha erro no formulario, mostra mensagens de erro nos campos 
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  // Assim que entrar nessa página, o localStorage é resetado
  useEffect(() => {
    //Resetar localstorage
    logout()
  }, []);

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  return (
    <div>
      <Container  className="m-0 text-center justify-content-center align-content-center"
        style={{ height: "89vh" }}>

<Row xs={12} className="justify-content-evenly">
<Col xs={10} md={6}>

        <Form className="mt-5 justify-content-center align-content-center" 
          // style={{ width: "75%", margin: "auto", textAlign: "center" }}
        onSubmit={handleSubmit(onSubmit, onError)}
        >

          {/* Caixinha de email */}
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-5"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Email inválido",
                },
                validate: (value) => value.includes("@") || "Email inválido",
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </FloatingLabel>

          {/* Caixinha de senha */}
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-5"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("senha", {
                required: "A senha é obrigatória",
              })}
            />
            {errors.senha && <p className="error">{errors.senha.message}</p>}
          </FloatingLabel>


          {/* Botao pra enviar o formulário */}
          <Button variant="primary" type="submit" className="mb-5" size="lg">
            Login
          </Button>

          {/* Alerta caso haja erro */}
          <Alert
            variant={alertVariant}
            className={alertClass}
            style={{
              position: "absolute",
              width: "30%",
              left: "35%",
              top: "85%",
            }}
            >
            {alertMensagem}
          </Alert>



        </Form>
              </Col>
              </Row>
      </Container>
    </div>
  );
};

export default Login;
