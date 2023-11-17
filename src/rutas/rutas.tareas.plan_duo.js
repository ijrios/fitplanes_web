import { Router } from "express";
import {
  crear_tarea,
  eliminar_tarea,
  obtener_tarea,
  obtener_tareas,
  actualizar_tareas,
} from "../controladores/controlador.tareas_tris.js";
import { ValidacionRequerida } from "../middlewares/Validar_token.js";

const router = Router();


router.get("/tareas_duo", ValidacionRequerida, obtener_tareas);

router.post("/tareas_duo", ValidacionRequerida, crear_tarea);

router.get("/tareas_duo/:id", ValidacionRequerida, obtener_tarea);

router.put("/tareas_duo/:id", ValidacionRequerida, actualizar_tareas);

router.delete("/tareas_duo/:id", ValidacionRequerida, eliminar_tarea);

export default router;
