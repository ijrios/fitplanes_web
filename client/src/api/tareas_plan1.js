import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tareas_unus");

export const createTaskRequest = async (task) => axios.post("/tareas_unus", task);

export const updateTaskRequest = async (task) =>
  axios.put(`/tareas_unus/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/tareas_unus/${id}`);

export const getTaskRequest = async (id) => axios.get(`/tareas_unus/${id}`);
