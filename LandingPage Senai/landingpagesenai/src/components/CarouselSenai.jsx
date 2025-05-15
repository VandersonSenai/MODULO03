import Carousel from 'react-bootstrap/Carousel';

function CarouselSenai() {
  return (
    <Carousel style={{ width: "100%"}} 
              data-bs-theme="dark" 
              fade={true} 
              interval={2000} 
              slide={true} 
              aria-hidden={true} 
              className='mb-4 mt-4' 
              indicators={false}>	
      <Carousel.Item>
          <a href="https://conteudo.senaies.com.br/cursos-qualificacao" 
              target="_blank" 
              rel="noopener noreferrer">
          <img
          className="d-block w-100"
          src="./banner-Acelera-Senai_desktop.png"
          alt="Acelera-Senai"
        />
        </a>

      </Carousel.Item>
      <Carousel.Item>
        <a href="https://loja.senaies.com.br/" target="_blank" rel="noopener noreferrer">
        <img
          className="d-block w-100"
          src="./cursossenai.png"
          alt="Curos Senai"
        />
        </a>
        {/* <Carousel.Caption>
          <h5>Curos Senai</h5>
          <p>.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSenai;