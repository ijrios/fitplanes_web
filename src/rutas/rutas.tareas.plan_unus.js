import { Router } from "express";
import {
  crear_tarea,
  eliminar_tarea,
  obtener_tarea,
  obtener_tareas,
  actualizar_tareas,
} from "../controladores/controlador.tareas_unus.js";
import { ValidacionRequerida } from "../middlewares/Validar_token.js";

const router = Router();
// CRUD TAREAS
router.get("/tareas_unus", ValidacionRequerida, obtener_tareas);

router.post("/tareas_unus", ValidacionRequerida, crear_tarea); //crear

router.get("/tareas_unus/:id", ValidacionRequerida, obtener_tarea);

router.put("/tareas_unus/:id", ValidacionRequerida, actualizar_tareas);

router.delete("/tareas_unus/:id", ValidacionRequerida, eliminar_tarea);

export default router;
