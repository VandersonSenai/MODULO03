// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom";

// Importação das páginas utilizadas
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import CadastroUsuario from "./pages/CadastroUsuario.jsx";
import CadastroTarefa from "./pages/CadastroTarefa.jsx";
import EditarTarefa from "./pages/EditarTarefa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/cadastrausuario",
        element: <CadastroUsuario />,
      },
      {
        path: "/cadastratarefa",
        element: <CadastroTarefa/>,
      },
      {
        path: "/editatarefa/:id",
        element: <EditarTarefa />
      },
    ],
  },
]);

export default router;
