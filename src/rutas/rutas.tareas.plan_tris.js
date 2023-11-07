import { Router } from "express";
import {
  crear_tarea,
  eliminar_tarea,
  obtener_tarea,
  obtener_tareas,
  actualizar_tareas,
} from "../controladores/controlador.tareas_duo.js";
import { ValidacionRequerida } from "../middlewares/Validar_token.js";

const router = Router();

// CRUD TAREAS
router.get("/tareas_tris", ValidacionRequerida, obtener_tareas);

router.post("/tareas_tris", ValidacionRequerida, crear_tarea);

router.get("/tareas_tris/:id", ValidacionRequerida, obtener_tarea);

router.put("/tareas_tris/:id", ValidacionRequerida, actualizar_tareas);

router.delete("/tareas_tris/:id", ValidacionRequerida, eliminar_tarea);

export default router;

