import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistroUsuario from "./Screens/RegistroUsuario";
import RegistroMascota from "./Screens/RegistroMascota";
import Login from "./Screens/Login";
import Inicio from "./Screens/inicio";
import Recordatorios from "./Screens/Recordatorios";
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
