import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistroUsuario from "./Screens/RegistroUsuario";
import RegistroMascota from "./Screens/RegistroMascota";
import Login from "./Screens/Login";
import Inicio from "./Screens/Inicio";
import Recordatorios from "./Screens/Recordatorios";
import ProtectedRoute from "./components/protectedroute";
import Documentos from "./Screens/documentos";
import Perfil from "./components/Perfil";
import Places from "./Screens/places";
import Salud_completado from "./components/Salud_completado";
const ADMIN = 1;
const USUARIO = 2;

function App() {
  const router = createBrowserRouter([
    {
      path: "/salud",
      element: <Salud_completado />,
    },
    {
      path: "/perfil",
      element: <Perfil />,
    },
    {
      path: "/documentos",
      element: <Documentos />,
    },
    {
      path: "/registro",
      element: <RegistroUsuario />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/places",
      element: (
        <ProtectedRoute
          element={<Places />}
          path="/places"
          requiredRoles={[ADMIN, USUARIO]}
        />
      ),
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
      path: "/",
      element: (
        <ProtectedRoute
          element={<Inicio />}
          path="/"
          requiredRoles={[ADMIN, USUARIO]}
        />
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
