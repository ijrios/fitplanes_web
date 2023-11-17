/*

import { zodResolver } from "@hookform/resolvers/zod";
*/
import { Card, Message, Button, Input, Label} from "../componentes/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from 'react';
import { useAuth } from "../contexto/autenticacionContexto";
import { registerRequest } from "../api/autenticacion";


function Registro() {
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    //console.log(usuario)
    const {register, handleSubmit, formState:{ errors}} = useForm();
    const navigate = useNavigate();
    
    const onSubmit = async (value) => {
      await signup(value);
    };
  
    useEffect(() => {
      if (isAuthenticated) navigate("/Tareas_form");
    }, [isAuthenticated]);
    

    return (
      <div className="flex items-center justify-center">
        <Card>
          <h1 className="text-3xl font-bold">Registro</h1>
          <form onSubmit = {handleSubmit(onSubmit)}>
            <Label htmlFor="nombre">Nombre completo :</Label>
            <Input
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre completo"
              {...register("nombre", {required:true})}

            />
           

            <Label htmlFor="usuario">Usuario:</Label>
            <Input
              type="text"
              name="usuario"
              placeholder="Escribe tu usuario de acceso"
              {...register("usuario", {required:true})}
            
  
            />
              
          <Label htmlFor="plan">Plan:</Label>
          <select
            name="plan"
            className="w-80 bg-zinc-700 text-white px-2 py-2 rounded-md"
            style={{ fontSize: "14px" }} // Ajusta el tamaño de la fuente según sea necesario
            {...register("plan", { required: true })}
            
          >
            <option value="Plan 1">Plan uno</option>
            <option value="Plan 2">Plan dos</option>
            <option value="Plan 3">Plan tres</option>
          </select>

            <Label htmlFor="correo">Correo Electrónico:</Label>
            <Input
              type= "mail"
              name="correo"
              placeholder="tucorreo@dominio.com"
              {...register("correo", {required:true})}
             
            />
           
            <Label htmlFor="contraseña">Contraseña:</Label>
            <Input
              type="password"
              name="contraseña"
              placeholder="********"
              {...register("contraseña", {required:true})}
              autoFocus
            />
        
            <Label htmlFor="confirmarContraseña">Confirmar Contraseña:</Label>
            <Input
              type="password"
              name="confirmarContraseña"
              placeholder="********"
              {...register("confirmarContraseña", {required:true})}
            />
          <Button>Enviar</Button>
          </form>
          <p>
            ¿Ya tienes una cuenta? &nbsp;
            <Link className="text-sky-500" to="/Acceso">
            Acceder
            </Link>
          </p>
       </Card>
      </div>
    );
  }

export default Registro
