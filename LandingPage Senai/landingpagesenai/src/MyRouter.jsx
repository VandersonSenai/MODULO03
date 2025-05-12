import { createBrowserRouter }  from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Contato from "./pages/Contato.jsx";
import Cursos from "./pages/Cursos.jsx";
import Login from "./pages/Login.jsx";
import Sobre from "./pages/Sobre.jsx";
import Home from "./pages/Home.jsx";

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
                path:"/home",
                element:<Home />
            },            {
                path:"/login",
                element:<Login />
            },                {
                path:"/cursos",
                element:<Cursos />
            },                 {
                path:"/contato",
                element:<Contato />
            },            
            {
                path:"/sobre",
                element:<Sobre />
            }
        ]
    },
])

export default router