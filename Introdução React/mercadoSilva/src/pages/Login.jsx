import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useVerificaLogin } from "../hooks/useApi";

import { BsBoxArrowInRight } from "react-icons/bs";

import { useContext } from "react";

import { AuthContext } from "../contexts/UserContext";

const Login = () => {

    const { logout } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();

    const { verificaLogin } = useVerificaLogin()

    const navigate = useNavigate()


    const onSubmit =(data) =>{
        // exibe os dados enviados ao carregar o evento
        console.log("Dados : ", data);

        // repassa para a funcao verificaLogin() os valores do form
        // armazenando em respostaVerificacao o resultado
        const respostaVerificacao = verificaLogin(data)

        // verificamos o retorno da funcao respostaVerificacao
        if(respostaVerificacao == "login efetuado com sucesso!"){
            alert(respostaVerificacao)
            // caso tenha sucesso manda para a rota ./home
            navigate("/home")
        }
        else {
            setAlertClass("mb-5 mt-2")
            serAlertMessage(respostaVerificacao)
        }
        
    };
    const onError =(errors) =>{
        // exibe os erros no console.log
        console.log("Erros : ", errors);
    };

    // Assim que entrar nessa página, o localStorage é resetado
    useEffect(() => {
        //Resetar localstorage
        logout()
      }, []);
        
    const [alertClass, setAlertClass] = useState("mb-3 d-none");
    const [alertMessage, serAlertMessage] = useState ("");
    const [alertVariant, setAlertVariant] = useState("danger");


  return (
    <div>
        <Container style={{ height: "100vh" }} className="justify-content-center align-content-center"
        onSubmit={handleSubmit(onSubmit, onError)}>
            <BsBoxArrowInRight style={{
                fontSize: "100px",
                color: "green",
                margin: "auto",
                width: "100%",
            }}/>

            <Form style={{ width: "75%", margin: "auto", textAlign: "center" }}>
                {/* caixa de email */}
                <FloatingLabel
                 controlId="floatingInput" 
                 label="Email" 
                 className="mb-5">
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
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

                {/* caixa de senha */}
                <FloatingLabel 
                controlId="floatingPassword" 
                label="Senha" 
                className="mb-5">
                    {/* Form.Control define as regras de controle  */}
                    <Form.Control 
                        type="password" 
                        placeholder="Senha"
                        {...register("senha", {
                            required: "A senha é obrigatória",
                        })}
                    />
                    {errors.senha && <p className="error">{errors.senha.message}</p>}
                </FloatingLabel>

                <Button variant="primary" 
                        type="submit" 
                        className="mb-5" 
                        size="lg">
                    Login
                </Button>
                <Alert variant="danger"
                // com o alertClass no className podemos dizer quando que ele ira aparecer. 
                        className={alertClass}
                        style={{ 
                            position:"absolute", 
                            width: "30%", 
                            left: "35%",
                            top:"90%"
                            }}> Sim 
                </Alert>
            </Form>
        </Container>

    </div>
  )
}

export default Login