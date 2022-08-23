import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState('')

  const onChangeInput = (event) => {
    setValue(event.target.value)
  }

  const erase = () => {
    setValue('')
  }

  const onKeyDown = (event) => {
    if(event.which === 13) {
    console.log(value)
    } else if (event.which === 27) {
      erase()
    }
  }

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
