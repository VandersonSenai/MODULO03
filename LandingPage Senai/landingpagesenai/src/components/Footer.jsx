import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer2 = () => <footer className="page-footer font-small blue pt-5">
    <div className="container-fluid text-left text-md-left py-2">
        <div className="row">
            <div className="col-md-8 mt-md-0 mt-3 text-start">
                <a href="/home">
                    <img
              alt="logosenai_2024.png"
              src="./logo_senai_2024.png"
              // src="./logo_senai.svg"
              width="180"
              // height="30"
              className="d-inline-block align-top "
              />
          </a>
                <p>Serviço Nacional de Aprendizagem Industrial.</p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            <div className="col-md-4 mb-md-4 d-flex flex-row-reverse ">
                 <ul className="list-unstyled d-flex gap-3 align-items-center justify-content-center m-0 p-0">
                  <li>
                    <a href="https://www.instagram.com/senaivitoria/" target="_blank">
                    <img width="24" height="24" src="./icon_instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                  <a href="https://m.facebook.com/SenaiES/?locale=pt_BR" target="_blank">
                    <img width="24" height="24" src="./icon_fb.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/SENAIES_Oficial/videos" target="_blank">
                    <img src="./icon_youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
            </div>
          <div className="footer-copyright text-center ">©2025 Todos os direitos reservados.
          </div>
            
        </div>
    </div>


</footer>

export default Footer2