// Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Importação do Hook form pra validar e enviar o formulário
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useListaUsuarios } from "../hooks/useUsuario";

import { useInserirTarefa } from "../hooks/useTarefa";

const CadastroTarefa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const usuarios = useListaUsuarios();

  const { inserirTarefa } = useInserirTarefa();

  const onSubmit = (data) => {
    console.log(data);
    inserirTarefa(data);
    alert("Tarefa cadastra!");
    navigate("/home");
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div>
<Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Caixinha de titulo */}
        <FloatingLabel
          controlId="floatingInputdescricao"
          label="Descricao"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o titulo do produto"
            {...register("descricao", {
              required: "O descrição é obrigatório",
              minLength: {
                value: 1,
                message: "O descrição deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 50,
                message: "O descrição deve ter ate 50 caracteres",
              },
            })}
          />
          {errors.descricao && <p className="error">{errors.descricao.message}</p>}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInputprioridade"
          label="Prioridade"
          className="mb-5"        >
          <Form.Select {...register("prioridade")}>
            <option value="baixa,">baixa</option>
            <option value="média">média</option>
            <option value="alta">alta</option>
          </Form.Select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </FloatingLabel>

        {/* Caixinha de autor */}
        <FloatingLabel
          controlId="floatingInputdata"
          label="Data"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o autor do produto"
            {...register("data", {
              required: "O setor é obrigatório",
              minLength: {
                value: 1,
                message: "O setor deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 30,
                message: "O setor deve ter ate 30 caracteres",
              },
            })}
          />
          {errors.data && <p className="error">{errors.data.message}</p>}
        </FloatingLabel>

        {/* Caixinha de generos */}
        <FloatingLabel
          controlId="floatingInputsetor"
          label="Setor"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o generos do produto"
            {...register("setor", {
              required: "O Setor é obrigatório",
              minLength: {
                value: 1,
                message: "O Setor deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O Setor deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.setor && <p className="error">{errors.setor.message}</p>}
        </FloatingLabel>


        {/* Caixinha de status */}
        <FloatingLabel
          controlId="floatingInputstatus"
          label="Status"
          className="mb-5"
        >
          <Form.Select disabled value="Quero ler" {...register("status")}>
            <option value="a fazer">a fazer</option>
          </Form.Select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </FloatingLabel>


        

        {/* Select de usuario */}
        <FloatingLabel
          controlId="floatingSelectTipo"
          label="Usuário"
          className="mb-5"
        >
          <Form.Select
            {...register("usuario", {
              validate: (value) => value != "Nenhum" || "Escolha um usuario",
            })}
          >
            <option value="Nenhum"> Escolha um usuario </option>
            {usuarios.map((user) => (
              <option
                key={user.id}
                value={user.nome}
              >
                {user.nome}
              </option>
            ))}
          </Form.Select>
          {errors.usuario && (
            <p className="error">{errors.usuario.message}</p>
          )}
        </FloatingLabel>
        {/* Botão para enviar o formulário de cadastro de produto */}
        <Button variant="primary" 
                size="lg" 
                type="submit"
                className="w-100">
         Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastroTarefa;
