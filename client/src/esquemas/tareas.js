import { z } from "zod";

export const Crear_tarea_esquema = z.object({
    dias_entrenamiento: z.string({
    required_error: "Dias de entrenamiento es requerido",
  }),
  descripcion: z.string({
    required_error: "Descripcion es requerida",
  }),
  hidratacion: z.string({
    required_error: "Hidratación es requerida",
  }),
  dieta: z.string({
    required_error: "Dieta es requerida",
  }),
  date: z.string().datetime().optional(),
});
