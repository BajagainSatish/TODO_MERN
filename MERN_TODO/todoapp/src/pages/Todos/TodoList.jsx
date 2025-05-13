import React from "react";
import TodoServices from "../../Services/TodoServices";
import toast from "react-hot-toast";
import "../Home/HomePage.css";

const TodoList = ({ allTask, refreshTodos }) => {
  const handleDelete = async (id) => {
    try {
      await TodoServices.deleteTodo(id);
      toast.success("Task deleted");
      refreshTodos();
    } catch (error) {
      toast.error("Failed to delete task" + error);
    }
  };

  const toggleStatus = async (task) => {
    try {
      await TodoServices.updateTodo(task._id, {
        isCompleted: !task.isCompleted,
      });
      toast.success("Task status updated");
      refreshTodos();
    } catch (error) {
      toast.error("Failed to delete task" + error);
    }
  };

  return (
    <div className="task-grid">
      {allTask.map((task) => (
        <div key={task._id} className="task-card">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-desc">{task.description}</p>
          <p className="task-status">
            Status:{" "}
            <span className={task.isCompleted ? "completed" : "pending"}>
              {task.isCompleted ? "Completed" : "Pending"}
            </span>
          </p>
          <div className="task-actions">
            <button
              className="status-btn"
              onClick={() => toggleStatus(task)}
            >
              Mark as {task.isCompleted ? "Pending" : "Completed"}
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
