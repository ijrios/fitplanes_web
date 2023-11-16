/*
import { useEffect } from "react";
import { useAuth } from "../contexto/autenticacionContexto";
import { Registro_esquema } from "../esquemas/autenticacion";
import { zodResolver } from "@hookform/resolvers/zod";

 {registerErrors.map((error, i) => (
            <Message message={error} key={i} />
          ))}

            {errors.contraseña?.message && (
              <p className="text-red-500">{errors.contraseña?.message}</p>
            )}

*/
import { Card, Message, Button, Input, Label} from "../componentes/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { registerRequest } from "../api/autenticancion";


function Registro() {
    //const { signup, errors: registerErrors, isAuthenticated } = useAuth();
    const {register, handleSubmit,
     // formState: { errors },
    } = useForm();
    //const navigate = useNavigate();

    //const onSubmit = async (value) => {
    //  await signup(value);
   // };
 
    //useEffect(() => {
    //  if (isAuthenticated) navigate("/tasks");
   // }, [isAuthenticated]); h-[calc(8vh-80px)]
  
    return (
      <div className="flex items-center justify-center">
        <Card>
          <h1 className="text-3xl font-bold">Registro</h1>
          <form onSubmit={handleSubmit(async (values) => {
            console.log(values);
            const res = await registerRequest(values)
            console.log(res)
          })}>
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
              placeholder="Escribe tu usario de acceso"
              {...register("usuario", {required:true})}
  
            />
              
          <Label htmlFor="plan">Plan:</Label>
          <select
            name="plan"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
            {...register("plan", { required: true })}
          >
            <option value="Plan 1">Plan uno</option>
            <option value="Plan 2">Plan dos</option>
            <option value="Plan 3">Plan tres</option>
          </select>

            <Label htmlFor="correo">Correo Electrónico:</Label>
            <Input
              name="correo"
              placeholder="tucorreo@dominio.com"
              {...register("correo", {required:true})}
            />
           
            <Label htmlFor="contraseña">Contraseña:</Label>
            <Input
              type="contraseña"
              name="contraseña"
              placeholder="********"
              {...register("contraseña", {required:true})}
            />
          
  
            <Label htmlFor="confirmarContraseña">Confirmar Contraseña:</Label>
            <Input
              type="contraseña"
              name="confirmarContraseña"
              placeholder="********"
              {...register("confirmarContraseña", {required:true})}
            />
          
            <Button>Enviar</Button>
          </form>
          <p>
            ¿Ya tienes una cuenta? &nbsp;
            <Link className="text-sky-500" to="/login">
            Acceder
            </Link>
          </p>
       </Card>
      </div>
    );
  }

export default Registro


/*

 {errors.usuario?.message && (
              <p className="text-red-500">{errors.usuario?.message}</p>
            )} 

 {errors.correo?.message && (
              <p className="text-red-500">{errors.correo?.message}</p>
            )}



  {errors.confirmarContraseña?.message && (
              <p className="text-red-500">{errors.confirmarContraseña?.message}</p>
            )}

            

            */