import express from 'express';
import morgan from 'morgan';
import ruta_autenticacion from './rutas/rutas.autenticacion.js';

// Inizializaciones
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(ruta_autenticacion);


export default app;
