import { z } from "zod";

export const Acceso_esquema = z.object({
  correo: z.string().email({
    message: "Ingresa un correo válido",
  }),
  contraseña: z.string().min(6, {
    message: "La contraseña debe ser mayor a 6 caracteres",
  }),
});

export const Registro_esquema = z.object({
   nombre: z
      .string({
        required_error: "Nombre completo es requerido",
      })
      .min(3, {
        message: "El nombre debe tener mas de 3 caracteres",
      }),
    usuario: z
      .string({
        required_error: "Usuario es requerido",
      })
      .min(3, {
        message: "El usuario debe tener mas de 3 caracteres",
      }),
    plan: z.string().min(1, {
      message: "Plan es requerido",
    }),
    correo: z.string().email({
      message: "Por favor ingresa el correo",
    }),
    contraseña: z.string().min(6, {
      message: "La contraseña debe ser mayor a 6 caracteres",
    }),
    confirmarContraseña: z.string().min(6, {
      message: "La contraseña debe ser mayor a 6 caracteres",
    }),
  })
  .refine((data) => data.contraseña === data.confirmarContraseña, {
    message: "Las contraseñas no coinciden",
    path: ["confirmarContraseña"],
  });
