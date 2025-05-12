import React from "react";
import toast from "react-hot-toast";
import TodoServices from "../Services/TodoServices";

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
    <div className="modal show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Task</h5>
            <button className="btn-close" onClick={handleClose} />
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control"
              placeholder="Description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>Close</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopModal;