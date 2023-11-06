import { Router } from "express";
import {
  Crear_tarea,
  Eliminar_tarea,
  obtener_tarea,
  Obtener_tareas,
  actualizar_tareas,
} from "../controladores/controlador.tareas_tris.js";
import { ValidacionRequerida } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tareas", ValidacionRequerida, Obtener_tareas);

router.post("/tareas", ValidacionRequerida, validateSchema(createTaskSchema), Crear_tarea);

router.get("/tareas/:id", ValidacionRequerida, obtener_tarea);

router.put("/tareas/:id", ValidacionRequerida, actualizar_tareas);

router.delete("/tareas/:id", ValidacionRequerida, Eliminar_tarea);

export default router;

