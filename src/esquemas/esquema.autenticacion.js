import { z } from "zod";

export const Registro_esquema = z.object({
  usuario: z.string({
    required_error: "Usuario es requerido",
   }),
  plan: z.string({
    required_error: "Plan es requerido", 
   }),
  correo: z
    .string({
      required_error: "Correo es requerido",
    })
    .email({
      message: "Correo no valido",
    }),
  contraseña: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, {
      message: "Contraseña mayor a 6 caracteres",
    }),
});