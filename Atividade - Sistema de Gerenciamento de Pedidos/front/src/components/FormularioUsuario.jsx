// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Importando o hook useInserirProduto
import {  useInserirUsuario, useBuscarUsuarioPorId, useAtualizaUsuario} from "../hooks/useUsuario";

const FormularioUsuario = (props) => {
  if (props.page === "editar") {
    
    useEffect(() => {
      async function fetchUsuario() {
        try {
          const usuario = await buscarUsuarioPorId(id);
          console.log(usuario);
          
          if (usuario && !carregado) {
            reset({
              nome: usuario[0].nome,
              email: usuario[0].email,
              tipo: usuario[0].tipo,
              senha: usuario[0].senha,
            });
          }
        } catch (erro) {
          console.error("Erro ao buscar usuario:", erro);
          if (erro.message.includes("Unexpected")) {
            alert("Usuario não encontrado!");
            navigate("/home");
          }
        }
      }
      fetchUsuario();
    }, []);
  }
  
  const [carregado, setCarregado] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // watch,
  } = useForm();  

  const { inserirUsuario } = useInserirUsuario();
  const { buscarUsuarioPorId } = useBuscarUsuarioPorId();
  const { atualizaUsuario } = useAtualizaUsuario();
  const { id } = useParams();


  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados no form:", data);

    if (props.page === "cadastro") {
      inserirUsuario(data);
      alert("Usuario cadastrado com sucesso!");
    } else {
      atualizaUsuario(data, id);
      alert("Usuario atualizado com sucesso!");
    }
    navigate("/home");
  };

  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    // <Container className="m-0 text-center 
    //                       justify-content-center 
    //                       "
    //           style={{ height: "89vh" }} >
    <Container className="text-center 
                          justify-content-center 
                          "
              style={{ height: "80vh" }} >
       <Row className="justify-content-evenly">
          <Col xs={10} md={6}>
            <Form className="" 
            // <Form className="mt-0 justify-content-center align-content-center" 
                  onSubmit={handleSubmit(onSubmit, onError)}>
                  {/* Caixinha de nome */}
                  <FloatingLabel
                    controlId="floatingInputNome"
                    label="Nome"
                    className="mb-5"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Digite o nome do produto"
                      {...register("nome", {
                        required: "O nome é obrigatório",
                        minLength: {
                          value: 2,
                          message: "O nome deve ter pelo menos 2 caracteres",
                        },
                        maxLength: {
                          value: 20,
                          message: "O nome deve ter ate 20 caracteres",
                        },
                      })}
                    />
                    {errors.nome && <p className="error">{errors.nome.message}</p>}
                  </FloatingLabel>
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
                  {/* Select de tipo */}
                  <FloatingLabel
                    controlId="floatingSelectTipo"
                    label="Tipo de Usuario"
                    className="mb-3"
                  >
                    <Form.Select
                      {...register("tipo", {
                        validate: (value) => value != "nenhum" || "Escolha uma tipo ",
                      })}
                    >
                      <option value="nenhum"> Escolha uma categoria </option>
                      <option value="Administrador"> Administrador </option>
                      <option value="Atentende"> Atentende </option>
                      
                    </Form.Select>
                    {errors.tipo && <p className="error">{errors.tipo.message}</p>}
                  </FloatingLabel>
              {/* Botão para enviar o formulário de cadastro de produto */}
              <Button className="" variant="primary" size="lg" type="submit">
                {props.page === "editar" ? "Atualizar" : "Cadastrar"}
              </Button>
            </Form>
          </Col>
        </Row>
    </Container>
  );
};

export default FormularioUsuario;
