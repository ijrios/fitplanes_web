import mongoose from "mongoose";

const Tarea_tris_esquema = new mongoose.Schema(
  {
    dias_entrenamiento: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hidratacion: {
      type: String,
      required: true,
    },
    dieta: {
        type: String,
        required: true,
      },
    date: {
      type: Date,
      default: Date.now,
    },
    usuario: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tareas_plan_tris", Tarea_tris_esquema);
