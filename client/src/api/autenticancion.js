// Peticiones que se hacen hacia el backend
import axios from "./axios";

export const registerRequest = async (usuario) =>
  axios.post(`/auth/register`, usuario);

export const loginRequest = async (user) => axios.post(`/auth/login`, usuario);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);

