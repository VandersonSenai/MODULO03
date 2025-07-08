// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// Importando o hook useForm do react-hook-form
import { useForm } from "react-hook-form";

//Importação do navigate pra transitar entre páginas
//Importação do useParams para pegar o id fornecido na url
import { useNavigate, useParams } from "react-router-dom";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState, useEffect } from "react";

// Importando o hook useInserirProduto
import {
  
  useInserirProduto,
  useBuscarProdutoPorId,
  useAtualizaProduto,
} from "../hooks/useApi";

const Formulario = (props) => {
  // IMPORTAÇÃO E USO DO HOOK FORM
  // O register é usado para criar o objeto de registro, com os campos ditos abaico no código
  // O handlesubmit é usado para tratar do envio do fomulario, caso de erro ou sucesso
  // O formState é usado para monitorar o estado do formulário, como erros e sucesso
  // O errors é usado para monitorar os erros do formulário, como campos obrigatórios e validações
  // o watch é usado para monitorar os campos do formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  // IMPORTAÇÃO DOS HOOKS PARA INSERIR, E ATUALIZAR
  // Usando a funcao de inserir produto vinda do hook
  const { inserirProduto } = useInserirProduto();
  // Usando a funcao de buscar produto por id e de atualizar o produto
  const { buscarProdutoPorId } = useBuscarProdutoPorId();
  const { atualizaProduto } = useAtualizaProduto();

  // Guardando o id do produto vindo da url
  const { id } = useParams();

  //Lista com categorias
  // const categorias = useListaCategorias();

  // Criando o navigate
  const navigate = useNavigate();

  //Link produto sem imagem
  // const linkImagem =
    // "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

  // Caso o campo de imagem recebe um novo valor, atualiza a imagem de acordo com o campo
  // const imagemAtual = watch("imagemUrl");

  // Variavel que controla se o produto já foi carregado
  const [carregado, setCarregado] = useState(false);

  //CASO O FORMULÁRIO SEJA DE EDIÇÃO, BUSCAR O PRODUTO PELO ID
  if (props.page === "editar") {
    // Variavel que controla se o produto já foi carregado
    // const [carregado, setCarregado] = useState(false);

    // Effect pra buscar o produto assim que o componente for montado
    useEffect(() => {
      async function fetchProduto() {
        try {
          const produto = await buscarProdutoPorId(id);
          // mudei aqui
          console.log(produto[0]);
          
          // Se houver produto, reseta o formulário com os dados do produto
          if (produto && !carregado) {
            reset({
              // mudei aqui
              nome: produto[0].nome_prod,
              descricao: produto[0].descricao_prod,
              // categoria: produto[0].categoria_prod,
              preco: produto[0].preco_prod,
              estoque: produto[0].estoque,
              // imagemUrl: produto[0].imagem_prod,
            });
            // Evita chamadas múltiplas de reset
            setCarregado(true);
          }
        } catch (erro) {
          console.error("Erro ao buscar produto:", erro);
          // Se o erro for de produto não encontrado, redireciona para a página inicial
          if (erro.message.includes("Unexpected")) {
            alert("Produto não encontrado!");
            navigate("/home");
          }
        }
      }
      fetchProduto();
    }, []);
  }

  // FUNCOES QUE LIDAM COM O SUCESSO E ERRO DO FORMULÁRIO
  // funcao pra caso de sucesso na validacao do formulario
  // data é o objeto com os campos do formulário
  const onSubmit = (data) => {
    console.log("Dados:", data);
    if (props.page === "cadastro") {
      // Envia o objeto data para o hook inserir o produto
      inserirProduto(data);
      alert("Produto cadastrado com sucesso!");
    } else {
      // Envia o objeto data para o hook inserir o produto, junto com o id
      atualizaProduto(data, id);
      alert("Produto atualizado com sucesso!");
    }
    navigate("/home");
  };

  //Caso tenha erro no formulario, mostra mensagens de erro nos campos
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    <Container className="text-center 
                          justify-content-center 
                          "
              style={{ height: "80vh" }} >
      <Row xs={12} md={12} sm={12} className=" justify-content-evenly">
        <Col xs={10} md={6}>
          <Form className="mt-0 justify-content-center align-content-center" 
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
                {/* Caixinha de descrição */}
                <FloatingLabel
                  controlId="floatingInputDescricao"
                  label="Descrição"
                  className="mb-5"
                >
                  <Form.Control
                    type="text"
                    placeholder="Digite a descrição do produto"
                    {...register("descricao", {
                      required: "A descrição é obrigatória",
                      minLength: {
                        value: 2,
                        message: "A descrição deve ter pelo menos 2 caracteres",
                      },
                      maxLength: {
                        value: 180,
                        message: "A descrição deve ter ate 180 caracteres",
                      },
                    })}
                  />
                  {errors.descricao && (
                    <p className="error">{errors.descricao.message}</p>
                  )}
                </FloatingLabel>
                {/* Select de categorias */}
                {/* <FloatingLabel
                  controlId="floatingSelectTipo"
                  label="Tipo de produto"
                  className="mb-5"
                >
                  <Form.Select
                    {...register("categoria", {
                      validate: (value) =>
                        !value == 0|| "Escolha uma categoria ",
                    })}
                  >
                    <option value="0"> Escolha uma categoria </option>
                    {categorias.map((cat) => (
                      // mudei aqui                
                      <option
                        key={cat.id_cat}
                        // mudei aqui, pra mandar o id ao inves do nome
                        value={cat.id_cat}
                        selected={
                          //mudei aqui
                          props.page === "editar" && watch("categoria") === cat.id_cat
                        }
                      >
                        {cat.nome_cat}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.categoria && (
                    <p className="error">{errors.categoria.message}</p>
                  )}
                </FloatingLabel> */}
                {/* Caixinha de preço */}
                <FloatingLabel
                  controlId="floatingInputEstoque"
                  label="Quantidade em estoque:"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    step="0.1"
                    placeholder="Digite a quantidade em estoque"
                    {...register("estoque", {
                      required: "O preço é obrigatório mesmo que seja zero!",
                      min: {
                        value: 0,
                        message: "Não é permitido valores negativos",
                      },
                    })}
                  />
                  {errors.estoque && <p className="error">{errors.estoque.message}</p>}
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInputPreco"
                  label="Preço"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    step="0.1"
                    placeholder="Digite o preco"
                    {...register("preco", {
                      required: "O preço é obrigatório",
                      min: {
                        value: 0.1,
                        message: "O preço deve ser maior que 0",
                      },
                    })}
                  />
                  {errors.preco && <p className="error">{errors.preco.message}</p>}
                </FloatingLabel>
            {/* Botão para enviar o formulário de cadastro de produto */}
            <Button variant="primary" size="lg" type="submit">
              {props.page === "editar" ? "Atualizar" : "Cadastrar"}
            </Button>
          </Form>
          </Col>
    </Row>

    </Container>
  );
};

export default Formulario;
