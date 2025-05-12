import React from "react";
import "../Home/HomePage.css";

const TodoList = ({ allTask }) => (
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
      </div>
    ))}
  </div>
);

export default TodoList;
