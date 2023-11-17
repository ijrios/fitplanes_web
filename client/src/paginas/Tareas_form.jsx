import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../componentes/ui";
import { useTasks } from "../contexto/tarea_plan_contexto";
import { Textarea } from "../componentes/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function Tareas_form() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("dias_entrenamiento", task.dias_entrenamiento);
        setValue("descripcion", task.descripcion);
        setValue("hidratacion", task.hidratacion);
        setValue("dieta", task.dieta);
        setValue("peso", task.peso);
        setValue(
          "fecha",
          task.fecha ? dayjs(task.fecha).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="dias_entrenamiento">Días de entrenamiento</Label>
        <Input
          type="text"
          name="dias_entrenamiento"
          placeholder="Dias de entrenamiento"
          {...register("dias_entrenamiento")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Ingresar días de entrenamientos</p>
        )}

        <Label htmlFor="descripcion">Descripción de ejercicios</Label>
        <Textarea
          name="descripcion"
          id="descripcion"
          rows="3"
          placeholder="Ejercicios"
          {...register("descripcion")}
        ></Textarea>

        <Label htmlFor="hidratacion">Hidratacion</Label>
        <Input
          type="text"
          name="hidratacion"
          placeholder="Litros de Agua al día"
          {...register("hidratacion")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Ingresar valor numérico de litros</p>
        )}

        <Label htmlFor="dieta">Dieta propuesta</Label>
        <Textarea
          name="dieta"
          id="dieta"
          rows="3"
          placeholder="Dieta"
          {...register("dieta")}
        ></Textarea>

       <Label htmlFor="peso">Peso actual</Label>
        <Textarea
          name="peso"
          id="peso"
          rows="3"
          placeholder="Peso (Kg)"
          {...register("peso")}
        ></Textarea>

        <Label htmlFor="fecha">Fecha</Label>
        <Input type="fecha" name="fecha" {...register("date")} />
        <Button>Guardar</Button>
      </form>
    </Card>
  );
}

export default Tareas_form;