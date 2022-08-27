import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import PropTypes from "prop-types";

export const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            className={["todo", todo.checked ? "checked" : ""].join(" ")}
            onClick={() => onToggle && onToggle(todo)}
            onKeyDown={() => onToggle && onToggle(todo)}
            role="button"
            tabIndex={0}
          >
            {todo.title}
          </span>
          <button
            className="remove"
            type="button"
            onClick={() => onRemove && onRemove(todo)}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    }).isRequired
  ),
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
