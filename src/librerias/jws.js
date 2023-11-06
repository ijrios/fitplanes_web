import { TOKEN_SECRET } from "../configuracion.js";
import jwt from "jsonwebtoken";

export async function createAccessToken(payload) {
    // Resolve todo terminó bien y reject terminó mla
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
