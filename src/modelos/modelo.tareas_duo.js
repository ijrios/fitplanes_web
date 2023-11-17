import mongoose from "mongoose";

const Tarea_duo_esquema = new mongoose.Schema(
  {
    dias_entrenamiento: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    hidratacion: {
      type: Number,
      required: true,
    },
    dieta: {
        type: String,
        required: true,
      },
    peso: {
        type: Number,
        required: true,
      },
    fecha: {
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

export default mongoose.model("Tareas_duo", Tarea_duo_esquema);
