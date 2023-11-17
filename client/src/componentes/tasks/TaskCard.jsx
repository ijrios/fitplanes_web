import { useTasks } from "../../contexto/tarea_plan_contexto";
import { Button, ButtonLink, Card } from "../ui";
export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.dias_entrenamiento}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Eliminar</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Editar</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.descripcion}</p>
      {/* format date */}
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
 }

 
 