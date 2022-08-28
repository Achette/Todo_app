import { useState } from "react";
import { Input } from "./components/input";
import { TodoList } from "./components/todoList";


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
        <TodoList todos={todos} onToggle={onToggle} onRemove={removeTodo} />
      </section>
    </section>
  );
}

export default App;
