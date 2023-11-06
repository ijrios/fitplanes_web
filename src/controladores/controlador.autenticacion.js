// Va a estar relacionado con la carpeta de ruta
import  Usuario from  '../modelos/modelo.usuarios.js'
import { createAccessToken } from "../librerias/jws.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Registrar con metodo asincrono
export const registro = async (req, res) => {
    const {correo, contraseña, usuario, plan} =  req.body
    //console.log(correo,contraseña,usuario,plan)
    try {

        // hashing contraseña
        const constraseña_hash = await bcrypt.hash(contraseña, 10);

        // Creando nuevo usuario
        const nuevo_usuario = new Usuario({
            usuario,
            plan,
            correo,
            contraseña: constraseña_hash,
        })
        const Usuario_guardado = await nuevo_usuario.save();

        // Creamos el token de acceso (pase) para saber que esta logrado
        const token = await createAccessToken({
            id: Usuario_guardado._id,
            usuario: Usuario_guardado.usuario,
            correo: Usuario_guardado.correo,
            plan: Usuario_guardado.plan,
        });

        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });
      

        res.json({
            id: Usuario_guardado._id,
            usuario: Usuario_guardado.usuario,
            correo: Usuario_guardado.correo,
            plan: Usuario_guardado.plan,
        })

        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    //console.log(nuevo_usuario)
};

// Acesso
export const acceso = async (req, res) => {res.send('acceso holiiiiii')};

