import express from 'express';
import path from 'path';
import morgan from 'morgan';

// Inizializaciones
const app = express();
// Configuraciones
app.use(morgan('dev'));

export default app;
