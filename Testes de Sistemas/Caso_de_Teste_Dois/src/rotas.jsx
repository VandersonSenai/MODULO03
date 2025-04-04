import { createBrowserRouter }  from "react-router-dom";
import {App} from "./App.jsx";
import {Errorpage} from "./pages/errorpage/errorpage.jsx";
import {Inicio} from "./pages/inicio/inicio.jsx";
import {Cadastro} from "./pages/cadastro/cadastro.jsx";
import {Cadastronovo} from "./pages/cadastro/cadastronovo.jsx";
import {Login} from "./pages/login/login.jsx";
import {Stateteste} from "./pages/stateteste.jsx";

// import {Stateteste} from "./pages/stateteste.jsx";



export const Rotas = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <Errorpage />,
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
            },            
            {
                path:"/cadastronovo",
                element:<Cadastronovo />
            },             {
                path:"/stateteste",
                element:<Stateteste />
            },            
        ],
    },
]);

