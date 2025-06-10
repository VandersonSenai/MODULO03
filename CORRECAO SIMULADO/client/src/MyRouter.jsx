import {createBrowserRouter} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import CadastroLivro from "./pages/CadastroLivro";   
import EditarLivro from "./pages/EditarLivro";
import CadastraUsuario from "./pages/CadastraUsuario.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Erro</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
        },      
        {
        path: "/home",
        element: <Home />,
        },
        {
        path:"/cadastrausuario",
        element: <CadastraUsuario />,
        },
        {
        path:"/cadastralivro",
        element: <CadastroLivro />,
        },
        {
        path:"/editarlivro/:id",
        element: <EditarLivro />,
        },
    ],
    },

]);

export default router;
// export default router;