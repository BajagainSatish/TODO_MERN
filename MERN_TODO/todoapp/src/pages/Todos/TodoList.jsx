import React from "react";

const TodoList = ({ allTask }) => (
  <div className="row">
    {allTask.map(task => (
      <div key={task._id} className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TodoList;