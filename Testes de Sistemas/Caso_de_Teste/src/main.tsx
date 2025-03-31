import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'react-router-dom'
import './index.css'
// import { App } from './App.tsx'
import  { Router } from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Router router={router}/>
  </StrictMode>,
)
