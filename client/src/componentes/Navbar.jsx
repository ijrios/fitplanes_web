import { Link } from "react-router-dom";
import { useAuth } from "../contexto/autenticacionContexto";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, usuario} = useAuth();
  console.log(isAuthenticated, usuario)

  /*
  const getTasksPageBasedOnPlan = () => {
    switch (user.plan) {
      case "Plan 1":
        return "/task1";
      case "Plan 2":
        return "/task2";
      case "Plan 3":
        return "/task3";
      default:
        // Redirigir a una tarea predeterminada en caso de que el plan no sea reconocido
        return "/";
    }
  };
*/

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/Pagina_inicio" : "/Pagina_inicio"}>FitPlanes</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido {usuario.usuario}
            </li>
            <li>
              <ButtonLink to="/Tareas_form">Agregar tarea</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/" onClick={() => logout()}>
                Cerrar sesión
              </ButtonLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/Planes">Planes</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/Acceso">Acceso</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/Registro">Registrar</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
