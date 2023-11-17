import express from 'express';
import morgan from 'morgan';
import cokieParser from 'cookie-parser';
import ruta_autenticacion from './rutas/rutas.autenticacion.js';
import ruta_tarea_unus from  './rutas/rutas.tareas.plan_unus.js';
import ruta_tarea_duo from './rutas/rutas.tareas.plan_duo.js';
import ruta_tarea_tris from './rutas/rutas.tareas.plan_tris.js';
import cors from 'cors';


// Inizializaciones
const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}
));
app.use(morgan("dev"));
app.use(express.json()); //convertir request en formato json 
app.use(cokieParser());

// Rutas
app.use('/api', ruta_autenticacion);
app.use("/api", ruta_tarea_unus);
app.use("/api", ruta_tarea_duo);
app.use("/api", ruta_tarea_tris);

if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    app.use(express.static("cliente/dist"));
  
    app.get("*", (req, res) => {
      console.log(path.resolve("cliente", "dist", "index.html") );
      res.sendFile(path.resolve("cliente", "dist", "index.html"));
    });
  }


export default app;
