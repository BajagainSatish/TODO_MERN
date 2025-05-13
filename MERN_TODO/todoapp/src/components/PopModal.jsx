import React from "react";
import toast from "react-hot-toast";
import TodoServices from "../Services/TodoServices";
import "./PopModal.css";

const PopModal = ({ title, setTitle, description, setDescription, showModal, setShowModal, refreshTodos }) => {
  const handleClose = () => setShowModal(false);

  const handleSubmit = async () => {
    if (!title || !description) return toast.error("Provide title & description");
    try {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const createdBy = userData.user.id;
      await TodoServices.createTodo({ title, description, createdBy });
      toast.success("Task Created");
      setTitle("");
      setDescription("");
      setShowModal(false);
      refreshTodos();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error creating task");
    }
  };

  if (!showModal) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Task</h2>
        <div className="modal-content">
          <input
            type="text"
            className="modal-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="modal-textarea"
            placeholder="Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="modal-actions">
            <button className="cancel-btn" onClick={handleClose}>
              Close
            </button>
            <button className="create-btn" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopModal;