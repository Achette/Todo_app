import React, { useState } from "react";

export const Input = ({ onNewTodo }) => {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState("");

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };



  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const submit = () => {
    onNewTodo(value)

    /*   console.log("submit", todos); */
    erase();
  };

  const erase = () => {
    setValue("");
  };

  return (
    <input
      className="new-todo"
      value={value}
      onChange={onChangeInput}
      placeholder="o que precisa ser feito?"
      onKeyDown={onKeyDown}
    />
  );
};
