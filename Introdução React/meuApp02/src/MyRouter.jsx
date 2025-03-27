import { Children } from "react";
import { createBrowserRouter }  from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Contato from "./pages/Contato.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Login from "./pages/Login.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />
            },              
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/contato",
                element:<Contato />
            },            
            {
                path:"/cadastro",
                element:<Cadastro />
            },
            {
                path:"/sobre",
                element:<Sobre />
            }
        ]
    },
])

export default router