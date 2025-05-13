import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import PopModal from "../../components/PopModal";
import TodoServices from "../../Services/TodoServices";
import TodoList from "../Todos/TodoList";
import toast from "react-hot-toast";
import "./HomePage.css";
import "../../components/PopModal.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const userData = localStorage.getItem("todoapp");
      if (!userData) return navigate("/login");
      
      const user = JSON.parse(userData);
      if (!user?.user?.id) {
        navigate("/login");
        return;
      }
      
      const { data } = await TodoServices.getAllTodo(user.user.id);
      setTasks(data.todos || []);
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = () => setShowModal(true);

  return (
    <>
      <Navbar />
      <main className="homepage">
        <section className="homepage-header">
          <h2>Welcome Back!</h2>
          <button className="add-task-btn" onClick={handleAddTask}>
            + Add Task
          </button>
        </section>

        <section>
          {tasks.length > 0 ? (
            <TodoList allTask={tasks} refreshTodos={fetchTasks} />
          ) : (
            <p className="no-task">No tasks yet. Create one to get started!</p>
          )}
        </section>

        <PopModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          refreshTodos={fetchTasks}
        />
      </main>
    </>
  );
};

export default HomePage;