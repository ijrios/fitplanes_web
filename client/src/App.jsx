import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexto/autenticacionContexto"
import { Navbar } from "./componentes/Navbar";
import Acceso from './paginas/Acceso' 
import Registro from './paginas/Registro'
import Pagina_inicio from './paginas/Pagina_inicio'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <main className="container content-container mx-auto px-10 md:px-0">
    <Navbar />
    <Routes>
    <Route path="/Pagina_inicio" element= {<Pagina_inicio />} />
    <Route path="/Acceso" element= {<Acceso />} />
    <Route path="/Registro" element= {<Registro />} />
    <Route path="/Plan 1" element= {<h1> Plan uno</h1>} />
    <Route path="/Plan 2" element= {<h1> Plan dos</h1>} />
    <Route path="/Plan 3" element= {<h1> Plan tres</h1>} />
    <Route path="/add-taks" element= {<h1> añadir tarea</h1>} />
    <Route path="/Perfil" element= {<h1> Perfil</h1>} />
    </Routes>
    </main>
    </BrowserRouter>
    </AuthProvider>
  )
}
//<h1 className="text-4xl font-bold">Hola mundo</h1>
export default App