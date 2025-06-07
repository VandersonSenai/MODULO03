import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useBuscaLivroId } from "../hooks/useApi";


const CardLivroEditar = ()  => {
  const { BuscaLivroiId }         = useBuscaLivroId()
  const { id }                    = useParams();
  const navigate                  = useNavigate();
  const [livro, setLivro]         = useState({});
  const [livroCarregado, setLivroCarregado] = useState(false);

  const voltarPaginaAnterior = () => {
    navigate(-1); 
  };

  useEffect(() => {
      async function fetchLivro() {
        try {
            const livro = await BuscaLivroiId(id)
            setLivro(livro);
            setLivroCarregado(true);
            console.log("Livro encontrado:", livroCarregado);
        } catch (erro) {
          alert("Erro ao buscar livro:", erro.message);
          if(erro.message.includes("Unexpected")){
            alert("Livro não encontrado")
            navigate("/home")
          }
        }
      }

      fetchLivro()
    }, []);
  

  // const [curso, setCurso] = useState({});

  return (
    <div className='d-flex flex-column text-start justify-content-center'>
      <h5 className='py-2 m-3'>{livro.livro_titulo}</h5>
      
      <p className='py-2 m-0 p-3'>
        <strong className=''>
          <b className="px-2">
            
          Autor :
          </b>
            
        </strong ><span className='px-2'>{livro.livro_autor}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          <b className="px-2">
          Gênero :
          </b>
        </strong ><span className='px-2'>{livro.livro_genero}</span>
      </p>
      <p className='py-1 m-0 p-3'>
        <strong className=''>
          <b className="px-2">
          Status :
          </b>
        </strong ><span className='px-2'>{livro.livro_status}</span>
      </p>
      <div className='py-2 mb-3 p-3'>
        <Button className=" " 
                variant="outline-info" 
                size="lg"
                onClick={voltarPaginaAnterior}>
                   Voltar 
        </Button>
      </div>
                      
    </div>
  )
}

export default CardLivroEditar