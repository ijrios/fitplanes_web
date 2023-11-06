import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from "../controladores/controlador.autenticacion.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

// Asignamos ruta para la autenticación 
router.post("/register", register);
router.post("/login", login);


export default router;
