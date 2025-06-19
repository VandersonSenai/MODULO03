// Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Importação do Hook form pra validar e enviar o formulário
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useListaUsuarios } from "../hooks/useUsuario";

import { useBuscarTarefaPorId, useAtualizaTarefa } from "../hooks/useTarefa";
import { useEffect, useState } from "react";

const EditarTarefa = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const usuarios = useListaUsuarios();

  const { buscarTarefa } = useBuscarTarefaPorId();
  const { atualizaTarefa } = useAtualizaTarefa();

  const { id } = useParams();

  const onSubmit = (data) => {
    console.log(data);
    atualizaTarefa(data, id);
    alert("Tarefa atualizada");
    navigate("/home");
  };
  const onError = (errors) => {
    console.log(errors);
  };

  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function fetchLivro() {
      try {
        if (usuarios.length === 0) return;
        const tarefa = await buscarTarefa(id);

        if (tarefa && !carregado) {
          reset({
            id: tarefa.id,
            descricao: tarefa.descricao,
            setor: tarefa.setor,
            prioridade: tarefa.prioridade,
            data: tarefa.data,
            status: tarefa.status,
            usuarios: tarefa.usuarios,
          });
          setCarregado(true);
        }
      } catch (erro) {
        if (erro.message.includes("Unexpected")) {
          alert("Tarefa não encontrada");
          navigate("/home");
        }
      }
    }
    fetchLivro();
  }, [usuarios]);

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
            <option value="baixa">baixa</option>
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
          <Form.Select {...register("status")}>
            <option value="a fazer">a fazer</option>
            <option value="fazendo">fazendo</option>
            <option value="pronto">pronto </option>
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
            {...register("usuarios", {
              validate: (value) => value != "Nenhum" || "Escolha um usuario",
            })}
          >
            <option value="Nenhum"> Escolha um usuario </option>
            {usuarios.map((user) => (
              <option key={user.id} value={user.nome}>
                {user.nome}
              </option>
            ))}
          </Form.Select>
          {errors.usuarios && <p className="error">{errors.usuarios.message}</p>}
        </FloatingLabel>
        {/* Botão para enviar o formulário de cadastro de produto */}
        <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="me-3">
          Editar
        </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditarTarefa;
