import { createBrowserRouter }  from "react-router-dom";
import App from "./App.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Contato from "./pages/Contato.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Login from "./pages/Login.jsx";
import Homedois from "./pages/Homedois.jsx";
import InfoCard from "./components/InfoCard.jsx";
import Forms from "./components/forms.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <Errorpage />,
        children:[
            {
                path:"/",
                element:<Home />
            },              {
                path:"/home2",
                element:<Homedois />
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
            },
            {
                path:"/forms",
                element:<Forms />
            },
            {
                path:"/informacao/:id",
                element: <InfoCard />
            }
        ],
    },
]);

export default router