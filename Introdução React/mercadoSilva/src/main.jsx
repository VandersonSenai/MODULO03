import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// importa provedor de rotas.
import { RouterProvider } from 'react-router-dom'

// importa componente com rotas estabelecidas.
import MyRouter from "./MyRouter.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* Atribui o nosso componete MyRouter como guia para o provedor de rotas*/}
    <RouterProvider router={MyRouter}/>
    
  </StrictMode>
);
