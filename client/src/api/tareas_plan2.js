import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tareas_duo");

export const createTaskRequest = async (task) => axios.post("/tareas_duo", task);

export const updateTaskRequest = async (task) =>
  axios.put(`/tareas_duo/${task._id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`/tareas_duo/${id}`);

export const getTaskRequest = async (id) => axios.get(`/tareas_duo/${id}`);
