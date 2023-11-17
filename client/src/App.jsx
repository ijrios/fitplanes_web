import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexto/autenticacionContexto"
import { TaskProvider } from "./contexto/tarea_plan_contexto"
import { Navbar } from "./componentes/Navbar";
import Acceso from './paginas/Acceso' 
import Registro from './paginas/Registro'
import Pagina_inicio from './paginas/Pagina_inicio'
import Tareas_form from './paginas/Tareas_form'
import Tareas_pagina from './paginas/Tareas_pagina'
import Planes from './paginas/Planes'

function App() {
  return (
    <AuthProvider>
    <TaskProvider>
    <BrowserRouter>
    <main className="container content-container mx-auto px-10 md:px-0">
    <Navbar />
    <Routes>
    <Route path="/" element= {<Pagina_inicio />} />
    <Route path="/Acceso" element= {<Acceso />} />
    <Route path="/Registro" element= {<Registro />} />
    <Route path="/Planes" element= {<Planes />} />
    <Route path="/Plan 2" element= {<h1> Plan dos</h1>} />
    <Route path="/Tareas_pagina" element= {<Tareas_pagina />} />
    <Route path="/Tareas_form" element= {<Tareas_form />} />
    <Route path="/Perfil" element= {<h1> Perfil</h1>} />
    </Routes>
    </main>
    </BrowserRouter>
    </TaskProvider>
    </AuthProvider>
  )
}
//<h1 className="text-4xl font-bold">Hola mundo</h1>
export default App