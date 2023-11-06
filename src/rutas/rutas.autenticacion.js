import { Router } from "express";
import {acceso,registro} from "../controladores/controlador.autenticacion.js";

const router = Router();

// Engloba rutas relacionadas con la autenticación
// Asignamos ruta para la autenticación 
router.post("/registro", registro); //cuando a una peticion post a /registro ejecta función registro
router.post("/acceso", acceso);


export default router;
