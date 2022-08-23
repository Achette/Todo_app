import { useState } from "react";
import "./App.css";

function App() {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const initialTodos = [
    { id: 1, title: 'Estudar React', checked: false}
  ]

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(initialTodos)


  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    addTodo()
    console.log("submit", todos);
    erase();
  };

  const addTodo = () => {

    setTodos([...todos, { value }])
  }

  const erase = () => {
    setValue("");
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>

      <section className="main">
        <input
          className="new-todo"
          value={value}
          onChange={onChangeInput}
          placeholder="o que precisa ser feito?"
          onKeyDown={onKeyDown}
        />

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title} {todo.checked}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;
