import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/todo", // backend port
});

// Add auth token to headers if present
API.interceptors.request.use((config) => {
  const userData = JSON.parse(localStorage.getItem("todoapp"));
  if (userData?.token) {
    config.headers.Authorization = `Bearer ${userData.token}`;
  }
  return config;
});

const TodoServices = {
  createTodo: (data) => API.post("/create", data),
  getAllTodo: (userId) => API.post(`/getAll/${userId}`),
  deleteTodo: (id) => API.delete(`/delete/${id}`),
  updateTodo: (id, data) => API.patch(`/update/${id}`, data)
};

export default TodoServices;
