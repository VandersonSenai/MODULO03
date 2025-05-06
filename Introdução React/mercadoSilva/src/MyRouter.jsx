import { createBrowserRouter } from "react-router-dom"

import App from "./App.jsx"
import PaginaError from "./pages/PaginaError.jsx"
import CadastrarProduto from "./pages/CadastrarProduto.jsx"
import EditarProduto from "./pages/EditarProduto.jsx"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"


const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <PaginaError />,
        children: [
            {
                    path:"/",
                    element:<Login />
            },
            {
                    path:"/login",
                    element:<Login />
            },
            {
                    path:"/home",
                    element:<Home />
            },
            {
                    path:"/cadastrarproduto",
                    element:<CadastrarProduto />
            },
            {
                    path:"/editarproduto/:id",
                    element:<EditarProduto />
            },
        ]
    }

    
])

export default router;