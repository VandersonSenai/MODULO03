import { createBrowserRouter }  from "react-router-dom";
import App from "./App.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
// import Sobre from "./pages/Sobre.jsx";
import Login from "./pages/Login.jsx";
// import InfoCard from "./components/InfoCard.jsx";



const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,  // componente que sera usando ao entrar nessa rota
        errorElement: <Errorpage />,
        children:[
            {
                path:"/",
                element:<Home />
            },           
            {
                path:"/home",
                element:<Login />
            },                    
            {
                path:"/login",
                element:<Login />
            },          
            {
                path:"/cadastro",
                element:<Cadastro />
            },
        ],
    },
]);

export default router