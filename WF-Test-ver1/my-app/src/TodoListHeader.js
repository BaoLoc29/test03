// TodoListHeader.js
import React from "react";

const TodoListHeader = ({ count, showOnlyDone, toggleShowOnlyDone }) => {
  return (
    <div className="header">
      <div>You have {count} tasks left!</div>
      <label>
        <input
          type="checkbox"
          checked={showOnlyDone}
          onChange={toggleShowOnlyDone}
        />
        Show completed tasks
      </label>
    </div>
  );
};

export default TodoListHeader;
