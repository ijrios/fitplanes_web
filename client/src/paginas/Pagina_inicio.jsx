import { Link } from "react-router-dom";

function Pagina_inicio() {
  return (
  <section className="flex justify-center items-center">
    <header className="bg-zinc-800 p-6 rounded-lg bg-opacity-50 w-4/5 max-w-2xl text-center mt-8">
    <h1 className="text-2xl py-4 font-bold">¡Bienvenido a FitPlanes!</h1>
    <p className="text-sm text-slate-400">
    
    FitPlanes es tu compañero de bienestar y fitness personal, diseñado para ayudarte a planificar, seguir y alcanzar tus metas de acondicionamiento físico y salud. Ya sea que estés interesado en mejorar tu estado físico, llevar un registro de tu dieta o simplemente mantenerte saludable, FitPlanes te brinda las herramientas y la motivación necesarias.

    Características Principales
    Registro de Actividades: Registra tus entrenamientos, comidas, actividades diarias y más. Lleva un seguimiento de tus progresos.

    Planificación de Metas: Define objetivos a corto y largo plazo. FitPlanes te ayuda a establecer un plan para alcanzarlos.

    Historial Personal: Accede a tu historial de actividades y logros pasados para mantenerte motivado y en el camino correcto.

    Comunidad Activa: Únete a una comunidad activa de personas con objetivos similares. Comparte tus logros y experiencias, y obtén apoyo de otros miembros.

    Consejos y Recursos: Encuentra consejos y recursos relacionados con el fitness, la salud y la nutrición para mejorar tu bienestar.

    Inicio Rápido
    Registro: Crea una cuenta en FitPlanes si eres nuevo, o inicia sesión si ya tienes una cuenta.

    Planificación: Establece tus objetivos de acondicionamiento físico y bienestar en tu panel de control personal.

    Registro de Actividades: Registra tus actividades diarias, como entrenamientos, comidas y otros eventos relacionados con tu salud y bienestar.

    Seguimiento de Progreso: Mantén un seguimiento de tu progreso a lo largo del tiempo. Observa cómo te acercas a tus metas y ajusta tu plan en consecuencia.

    Conéctate: Únete a grupos y comunidades para conectar con otros usuarios que comparten tus intereses. Comparte tus logros, recibe consejos y apoyo de otros miembros de la comunidad.
  </p>

  <Link
    className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
    to="/Registro"
  >
    Get Started
  </Link>
</header>
  </section>
  );
}

export default Pagina_inicio;
