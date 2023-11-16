// Va a estar relacionado con la carpeta de ruta
import  Usuario from  '../modelos/modelo.usuarios.js'
import { createAccessToken } from "../librerias/jws.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Registrar con metodo asincrono
export const registro = async (req, res) => {
    const {correo, contraseña, usuario, plan, nombre} =  req.body
    //console.log(correo,contraseña,usuario,plan)
    try {

        const userFound = await Usuario.findOne({email})
        if (userFound) return res.status(400).json({message: "Correo ya está en uso"})
        

        // Hashing contraseña
        const constraseña_hash = await bcrypt.hash(contraseña, 10);

        // Creando nuevo usuario
        const nuevo_usuario = new Usuario({
            nombre,
            usuario,
            plan,
            correo,
            contraseña: constraseña_hash,
        })
        const Usuario_guardado = await nuevo_usuario.save();

        // Creamos el token de acceso (pase) para saber que esta logeado
        const token = await createAccessToken({
            id: Usuario_guardado._id,
            nombre: Usuario_guardado.nombre,
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
            nombre: Usuario_guardado.nombre,
            usuario: Usuario_guardado.usuario,
            correo: Usuario_guardado.correo,
            plan: Usuario_guardado.plan,
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    //console.log(nuevo_usuario)
    console.log("Usuario creado");
};

// se crea Acceso con metodo asincrono 
export const acceso = async (req, res) => {
    const {correo, contraseña, plan, nombre} =  req.body
    //console.log(correo,contraseña,plan)
    try {

        // Para encontrar usuario creado
        const Usuario_encontrado = await Usuario.findOne({correo, plan})
        if(!Usuario_encontrado) return res.status(400).json({message: "Usuario no encontrado"});

        // Para encontrar contraseña incorrecta
        const coincide = await bcrypt.compare(contraseña, Usuario_encontrado.contraseña);
        if(!coincide) return res.status(400).json({message: "Contraseña invalida"});

        // Creamos el token de acceso (pase) para saber que esta logrado
        const token = await createAccessToken({
            id: Usuario_encontrado._id,
            nombre: Usuario_encontrado.nombre,
            usuario: Usuario_encontrado.usuario,
            correo: Usuario_encontrado.correo,
            plan: Usuario_encontrado.plan,
        });

        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });

        res.json({
            id: Usuario_encontrado._id,
            nombre: Usuario_encontrado.nombre,
            usuario: Usuario_encontrado.usuario,
            correo: Usuario_encontrado.correo,
            plan: Usuario_encontrado.plan,
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    //console.log(nuevo_usuario)
    console.log("Sesion iniciada");
};

// METODO Salir de la sesion 
export const salir = (req, res) => {
    res.cookie('token', '', {
      expires: new Date(0) 
    });
    console.log("Sesion finalizada");
    // Otras operaciones relacionadas con la salida de la sesión
    return res.status(200).json({ message: "Sesion finalizada" });
    
  }

  // Perfil
export const perfil = async (req, res) => {
    const usuario_encontra = await Usuario.findById(req.user.id)

    if(!usuario_encontra) return res.status(400).json({ message: "Usuario no encontrado"});
    return res.json({
        id: usuario_encontra._id,
        nombre: usuario_encontra.nombre,
        usuario: usuario_encontra.usuario,
        correo: usuario_encontra.correo,
        plan: usuario_encontra.plan,
    })
  }