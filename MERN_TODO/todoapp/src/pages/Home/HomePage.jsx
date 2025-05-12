import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import PopModal from "../../components/PopModal";
import TodoServices from "../../Services/TodoServices";
import TodoList from "../Todos/TodoList";
import "./HomePage.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("todoapp"));
      if (!user) return navigate("/login");
      const { data } = await TodoServices.getAllTodo(user.user.id);
      setTasks(data.todos);
    } catch (err) {
      console.error("Failed to fetch todos", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="homepage-container">
        <div className="homepage-header">
          <h2 className="homepage-title">Welcome Back!</h2>
          <button className="create-btn" onClick={() => setShowModal(true)}>+ Add Task</button>
        </div>
        {tasks.length ? (
          <TodoList allTask={tasks} refreshTodos={fetchTasks} />
        ) : (
          <p className="no-task">No tasks yet. Create one to get started!</p>
        )}
        <PopModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          refreshTodos={fetchTasks}
        />
      </div>
    </>
  );
};

export default HomePage;
