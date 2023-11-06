import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../configuracion.js";

export const ValidacionRequerida = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res
        .status(401)
        .json({ message: "No token, autoriacion denegada" });

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: "El token no es valido" });
      }
      // Agregar el valor del "plan" al objeto user
      req.user = user
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
