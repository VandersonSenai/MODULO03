import { Children } from "react";
import { createBrowserRouter }  from "react-router-dom";
// import App from "./app.jsx";
import ErrorPage from "./pages/errorpage";
import Inicio from "./pages/inicio/inicio.jsx";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login/login.jsx";

export const rotas = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Inicio />
            },              
            {
                path:"/login",
                element:<Login />
            },            
            {
                path:"/cadastro",
                element:<Cadastro />
            }
        ]
    },
])

