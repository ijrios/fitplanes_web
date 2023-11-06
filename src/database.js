import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/plan_gym");
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};