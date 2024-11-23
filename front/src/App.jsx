import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistroUsuario from "./Screens/RegistroUsuario";
import RegistroMascota from "./Screens/RegistroMascota";
import Login from "./Screens/Login";
import Inicio from "./Screens/Inicio";
import Recordatorios from "./Screens/Recordatorios";
import Salud from "./Screens/Salud";
import Alimentación from "./Screens/Alimentación";
import Actividad from "./Screens/Actividad";
import Documentos from "./Screens/Documentos";
import Lugares from "./Screens/Lugares";
import Perfil from "./Screens/Perfil";


import ProtectedRoute from "./components/protectedroute";
const ADMIN = 1;
const USUARIO = 2;

function App() {
  const router = createBrowserRouter([
    {
      path: "/registro",
      element: <RegistroUsuario />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/mascota",
      element: (
        <ProtectedRoute
          element={<RegistroMascota />}
          path="/mascota"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/recordatorios",
      element: (
        <ProtectedRoute
          element={<Recordatorios />}
          path="/recordatorios"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/salud",
      element: (
        <ProtectedRoute
          element={<Salud />}
          path="/salud"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/alimentación",
      element: (
        <ProtectedRoute
          element={<Alimentación />}
          path="/alimentación"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/actividad",
      element: (
        <ProtectedRoute
          element={<Actividad />}
          path="/actividad"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/documentos",
      element: (
        <ProtectedRoute
          element={<Documentos />}
          path="/documentos"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/lugares",
      element: (
        <ProtectedRoute
          element={<Lugares />}
          path="/lugares"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    {
      path: "/perfil",
      element: (
        <ProtectedRoute
          element={<Perfil />}
          path="/perfil"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
    },
    


    {
      path: "/",
      element: (
        <ProtectedRoute element={<Inicio />} path="/" requiredRoles={[ADMIN, USUARIO]} />
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
