import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistroUsuario from "./Screens/RegistroUsuario"
import RegistroMascota from "./Screens/RegistroMascota"
import Login from "./Screens/Login";
import Inicio from "./Screens/inicio";
import Recordatorios from "./Screens/Recordatorios";


function App() {
  const router = createBrowserRouter([
    {
      path: "/registro",
      element: <RegistroUsuario />
    },
    {
      path: "/mascota",
      element: <RegistroMascota />
    },
    {
      path: "/recordatorios",
      element: <Recordatorios />
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/",
      element: <Inicio />
    }
  ])

  return (

    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
