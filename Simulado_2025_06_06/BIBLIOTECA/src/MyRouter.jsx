import { createBrowserRouter }  from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import { ListaLivros } from "./pages/ListaLivros.jsx";
import { CadastraLivro } from "./pages/CadastraLivro.jsx";
import { Editalivro } from "./pages/Editalivro.jsx";

import { Listasuarios } from "./pages/Listasuarios.jsx";
import { CadastroUsuario } from "./pages/CadastroUsuario.jsx";
import { EditaUsuario } from "./pages/EditaUsuario.jsx";



const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Home />
            },            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/listalivros",
                element:<Home />
            },
            {
                path:"/cadastrolivro",
                element:<CadastraLivro />
            },
            {
                path:"/editalivro/:id",
                element:<Editalivro />
            },
            {
                path:"/listausuarios",
                element:<Listasuarios />
            },
            {
                path:"/cadastrousuario",
                element:<CadastroUsuario />
            },
            {
                path:"/editarusuario/:id",
                element:<EditaUsuario />
            },
        ]
    },
])

export default router