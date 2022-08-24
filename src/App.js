import { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";

function App() {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    addTodo();
    /*   console.log("submit", todos); */
    erase();
  };

  const addTodo = () => {
    const id = new Date().getTime(); //opção para ids
    setTodos([
      ...todos,
      { id: id, title: value, checked: false },
    ]);
  };

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

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj))
    );

    console.log(`toogle: ${todos}`);
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
            <li key={todo.id}>
              <span
                className={['todo', todo.checked ? 'checked' : ''].join(" ")}
                onClick={() => onToggle(todo)}
                onKeyDown={() => onToggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button className="remove" type="button">
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
