import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

  return config;
});


const api = axios.create({
    baseURL: "http://localhost:4200"
});




export default api;