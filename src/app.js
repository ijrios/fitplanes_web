import express from 'express';
import morgan from 'morgan';
import cokieParser from 'cookie-parser';
import ruta_autenticacion from './rutas/rutas.autenticacion.js';

// Inizializaciones
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); //convertir request en formato json 
app.use(cokieParser());
app.use('/api', ruta_autenticacion);


export default app;
