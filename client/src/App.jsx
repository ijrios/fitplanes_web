import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexto/autenticacionContexto"
import Acceso from './paginas/Acceso' 
import Registro from './paginas/Registro'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element= {<h1> Home Page</h1>} />
    <Route path="/Acceso" element= {<Acceso />} />
    <Route path="/Registro" element= {<Registro />} />
    <Route path="/Plan unus" element= {<h1> Plan uno</h1>} />
    <Route path="/Plan duo" element= {<h1> Plan dos</h1>} />
    <Route path="/Plan trio" element= {<h1> Plan tres</h1>} />
    <Route path="/add-taks" element= {<h1> añadir tarea</h1>} />
    <Route path="/Perfil" element= {<h1> Perfil</h1>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
//<h1 className="text-4xl font-bold">Hola mundo</h1>
export default App