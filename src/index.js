import express from 'express';
import app from "./app.js"
import { connectDB } from "./database.js";

connectDB();
// Exponemos el servico por el puerto 4000 (se puede cambiar)
app.set('puerto', process.env.PORT || 3000);

// El servidor está escuchando
app.listen(app.get('puerto'), () => {
    console.log('Servidor en puerto', app.get('puerto'));
});