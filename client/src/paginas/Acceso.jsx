import { Card, Message, Button, Input, Label} from "../componentes/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../contexto/autenticacionContexto";

export const Acceso = () => {
  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit =  handleSubmit(async (data) => {
    await signin(data);
  })

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);


  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        <h1 className="text-2xl font-bold">Acceso</h1>
        <form onSubmit={(onSubmit)}>
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
              name="correo"
              placeholder="tucorreo@dominio.com"
              {...register("correo", {required:true})}
            />

           {errors.correo?.message && (
              <p className="text-red-500">{errors.correo?.message}</p>
            )}
           
            <Label htmlFor="contraseña">Contraseña:</Label>
            <Input
              type="contraseña"
              name="contraseña"
              placeholder="********"
              {...register("contraseña", {required:true})}
            />
          
            {errors.contraseña?.message && (
              <p className="text-red-500">{errors.contraseña?.message}</p>
            )}
  
          <Button >Acceder</Button>
          </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta? <Link to="/Registro" className="text-sky-500">Registrarse</Link>
        </p>
      </Card>
    </div>
  );
};

export default Acceso;
