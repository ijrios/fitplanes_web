import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

export const Acceso = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Llamar a la función de inicio de sesión en el servidor
      const response = await signin(data);

      // Verificar si la autenticación fue exitosa y redirigir en consecuencia
      if (response.success) {
        const { plan } = response.user;
        if (plan === "plan1") {
          navigate("/plan1"); // Redirigir a la ruta de plan1
        } else if (plan === "plan2") {
          navigate("/plan2"); // Redirigir a la ruta de plan2
        } else if (plan === "plan3") {
          navigate("/plan3"); // Redirigir a la ruta de plan3
        } else {
          // Valor de "plan" desconocido, puedes manejarlo de acuerdo a tus necesidades.
          navigate("/unknown-plan");
        }
      } else {
        // Autenticación fallida, mostrar mensaje de error si es necesario
      }
    } catch (error) {
      // Manejar errores de autenticación
    }
  };

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="correo">Correo Electrónico:</Label>
          <Input
            label="Escribe tu corre"
            type="correo"
            name="correo"
            placeholder="tucorreo@dominio.com"
            {...register("correo", { required: true })}
          />
          <p>{errors.correo?.message}</p>

          <Label htmlFor="contraseña">Contraseña:</Label>
          <Input
            type="contraseña"
            name="contraseña"
            placeholder="Escribe tu contraseña"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p>{errors.contraseña?.message}</p>

          <Label htmlFor="plan">Plan:</Label>
          <div>
            <input
              type="checkbox"
              id="planUnus"
              name="plan"
              value="Plan 1"
              checked={selectedPlan.includes('Plan 1')}
              onChange={() => handleCheckboxChange('Plan 1')}
            />
            <label htmlFor="planUnus">Plan unus</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="planDuo"
              name="plan"
              value="Plan 2"
              checked={selectedPlan.includes('Plan 2')}
              onChange={() => handleCheckboxChange('Plan 2')}
            />
            <label htmlFor="planDuo">Plan duo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="planTris"
              name="plan"
              value="Plan 3"
              checked={selectedPlan.includes('Plan 3')}
              onChange={() => handleCheckboxChange('Plan 3')}
            />
            <label htmlFor="planTris">Plan tris</label>
            {...register("plan", { required: true })}
          </div>
          <Button>Acceder</Button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p>
      </Card>
    </div>
  );
};

export default Acceso