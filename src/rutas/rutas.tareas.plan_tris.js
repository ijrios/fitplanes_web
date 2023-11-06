import { Router } from "express";
import {
  crear_tarea,
  eliminar_tarea,
  obtener_tarea,
  obtener_tareas,
  actualizar_tareas,
} from "../controladores/controlador.tareas_tris.js";
import { ValidacionRequerida } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tareas", ValidacionRequerida, obtener_tareas);

router.post("/tareas", ValidacionRequerida, crear_tarea);

router.get("/tareas/:id", ValidacionRequerida, obtener_tarea);

router.put("/tareas/:id", ValidacionRequerida, actualizar_tareas);

router.delete("/tareas/:id", ValidacionRequerida, eliminar_tarea);

export default router;

