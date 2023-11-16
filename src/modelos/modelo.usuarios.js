import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String, //tipo texto
      required: true, // Campo obligatorio
      trim: true, // Limpiar los espacios y organiza la estructura
    },
    usuario: {
      type: String, //tipo texto
      required: true, // Campo obligatorio
      trim: true, // Limpiar los espacios y organiza la estructura
    },
    plan: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true, //campo unico 
    },
    contraseña: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Usuario", userSchema);
