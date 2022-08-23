import { useState } from "react";
import "./App.css";

function App() {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const [value, setValue] = useState("");

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    console.log("submit", value);
    erase();
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
      </section>
    </section>
  );
}

export default App;
