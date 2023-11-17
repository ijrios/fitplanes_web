// Peticiones que se hacen hacia el backend
import axios from 'axios';

const API = 'http://localhost:3000/api'

export const registerRequest = async (user) => axios.post(`${API}/registro`, user);

export const loginRequest = async (user) => axios.post(`${API}/acceso`, user);

//export const verifyTokenRequest = async () => axios.get(`${API}/acceso`);