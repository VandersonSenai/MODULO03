import { Children } from "react";
import { createBrowserRouter }  from "react-router-dom";
import App from "./App.tsx";
import {Inicio} from "./pages/inicio/index.tsx"
import {Cadastro} from "./pages/cadastro/index.tsx";
import {Login} from "./pages/login/index.tsx"
import {ErrorPage} from "./pages/error/index.tsx"

export const router = createBrowserRouter([
  {
      path:"/",
      element:<App />,  // componente que sera usando ao entrar nessa rota
      errorElement: <ErrorPage />,
      Children:[
          {
              path:"/",
              element:<Inicio />
          },
          {
              path:"/cadastro",
              element:<Cadastro />
          },
          {
              path:"/cadastro",
              element:<Login />
          }          
      ]
  },
])

