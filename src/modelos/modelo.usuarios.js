import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, //tipo texto
      required: true, // Campo obligatorio
      trim: true, // Limpiar los espacios y organiza la estructura
    },
    plan: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //campo unico 
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
