// TodoList.js
import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ tasks, toggleTaskStatus, showOnlyDone }) => {
  return (
    <div className="todo-list-container">
      {tasks.map(task => (
        <div 
          className={`todo-item-container ${task.done && showOnlyDone ? "" : "show"}`} 
          key={task.id}
        >
          {task.done ? (
            <FaRegCheckCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => toggleTaskStatus(task.id)}
            />
          ) : (
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => toggleTaskStatus(task.id)}
            />
          )}
          <div className="item-title">{task.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
