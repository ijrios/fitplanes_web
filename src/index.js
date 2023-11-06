import express from 'express';
import app from "./aplicacion.js"
import { connectDB } from "./database.js";

connectDB();
app.set('puerto', process.env.PORT || 4000);

// El servidor está escuchando
app.listen(app.get('puerto'), () => {
    console.log('Servidor en puerto', app.get('puerto'));
});