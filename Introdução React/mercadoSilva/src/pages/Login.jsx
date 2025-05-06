
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { useForm } from "react-hook-form";
import { BsBoxArrowInRight } from "react-icons/bs";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
  return (
    <div>Login
        <Container style={{ height: "100vh" }} className="justify-content-center align-content-center">
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
                    <Form.Control 
                        type="password" 
                        placeholder="Senha"
                        {...register("Senha", {
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
                        className="mb-5" 
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