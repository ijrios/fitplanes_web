import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tareas_tris");

export const createTaskRequest = async (task) => axios.post("/tareas_tris", task);

export const updateTaskRequest = async (task) =>
  axios.put(`/tareas_tris/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/tareas_tris/${id}`);

export const getTaskRequest = async (id) => axios.get(`/tareas_tris/${id}`);
