import { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";
import { Input } from "./components/input";

function App() {
  const [todos, setTodos] = useState([]);

  const oneNewTodo = (value) => {
    const id = new Date().getTime(); //opção para ids
    setTodos([...todos, { id: id, title: value, checked: false }]);
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
    //console.log(`toogle: ${todos}`);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>

      <section className="main">
        <Input onNewTodo={oneNewTodo} />

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                onClick={() => onToggle(todo)}
                onKeyDown={() => onToggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button
                className="remove"
                type="button"
                onClick={() => removeTodo(todo)}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;
