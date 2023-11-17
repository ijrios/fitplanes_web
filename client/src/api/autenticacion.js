// Peticiones que se hacen hacia el backend
import axios from 'axios';

const API = 'http://localhost:3000/api'

export const registerRequest = async (usuario) => axios.post(`${API}/registro`, usuario);

export const loginRequest = async (usuario) => axios.post(`${API}/acceso`, usuario);

export const ValidacionRequerida = async () => axios.get(`${API}/acceso`);