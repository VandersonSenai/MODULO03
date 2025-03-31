import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import {Rotas} from './rotas.jsx'
import './index.css'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas}/>
    {/* <App /> */}
  </StrictMode>,
)
