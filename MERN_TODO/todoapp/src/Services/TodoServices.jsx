import axios from "axios";

// Get user from localStorage safely
const user = JSON.parse(localStorage.getItem("todoapp"));

if (user?.token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

// Create TODO
const createTodo = (data) => {
  return axios.post("/todo/create", data);
};

// Get all TODOs
const getAllTodo = (id) => {
  return axios.post(`/todo/getAll/${id}`);
};

const TodoServices = { createTodo, getAllTodo };
export default TodoServices;
