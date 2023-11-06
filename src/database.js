import mongoose from "mongoose";

// Funcion para conectar la base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/plan_gym"); //Aqui se modifica el link
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};