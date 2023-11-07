import { Router } from "express";
import {acceso,registro,salir, perfil} from "../controladores/controlador.autenticacion.js";
import {ValidacionRequerida} from '../middlewares/Validar_token.js'
import {Registro_esquema} from '../esquemas/esquema.autenticacion.js'
import {ValidarEsquema} from '../middlewares/Validar_esquema.js'

const router = Router();

// Engloba rutas relacionadas con la autenticación
// Asignamos ruta para la autenticación 
// CRUD USUARIOS
router.post("/registro", ValidarEsquema(Registro_esquema), registro); //cuando a una peticion post a /registro ejecta función registro
router.post("/acceso", acceso);
router.post("/salir", salir);
router.get("/perfil", ValidacionRequerida, perfil);


export default router;
