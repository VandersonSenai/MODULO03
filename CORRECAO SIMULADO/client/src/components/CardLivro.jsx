import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import { useDeletaLivro } from '../hooks/useLivro'


const CardLivro = (props) => {
    const {deletaLivro} = useDeletaLivro()
    const handleDelete = async () => {
        const deletado = await  deletarLivro(props.id)
        
            alert("Livro deletado com sucesso!");
            window.location.reload(); 
            // Recarrega a página para refletir a exclusão
    }

    return (
    <div>
        <card border="primary" style={{ width: '18rem' }}>

        <Card.Body>
            <Card.Title>Livro</Card.Title>
            <Card.Text>
                Titulo: {props.titulo}
            </Card.Text>
            <Card.Text>
                Autor: {props.autor}
            </Card.Text>
            <Card.Text>
                Genero: {props.genero}
            </Card.Text>            
            <Card.Text>
                Usuário: {props.usuario}
            </Card.Text>

            <Button 
            variant="warning" 
            type='button'
            href={`/editarlivro/${props.id}`}
            className='me-3'
                >Editar</Button>

            <Button variant="danger" onClick={() => deletaLivro(1)}>Deletar</Button>
            </Card.Body>

    </div>
  )
}

export default CardLivro