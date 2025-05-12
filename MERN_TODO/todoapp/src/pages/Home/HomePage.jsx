import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import PopModal from "../../components/PopModal";
import TodoServices from "../../Services/TodoServices";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("todoapp"));
      if (!user) return navigate('/login');
      const { data } = await TodoServices.getAllTodo(user.user.id);
      setTasks(data.todos);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task d-flex justify-content-between align-items-center mb-4">
          <h1>Your Tasks</h1>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Create Task</button>
        </div>
        <Card allTask={tasks} />
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