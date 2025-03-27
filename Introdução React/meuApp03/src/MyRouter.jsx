import { Children } from "react";
import { createBrowserRouter }  from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx"
import Sobre from "./pages/Sobre.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/cadastro",
                element:<Cadastro />
            },            {
                path:"/sobre",
                element:<Sobre />
            }
        ]
    },
])

export default router