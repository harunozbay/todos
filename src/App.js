import "./App.css";
import { useState } from "react";
import List from "./components/List/list";
import Entry from "./components/Entry/entry";

function App() {
  const [todos, setTodos] = useState([
    { text: "Get up early", done: true , entryMode:false },
    { text: "Have a breakfast", done: false, entryMode:false },
    { text: "Brush your teeth", done: false , entryMode:false},
  ]);
  return (
    <div id="App">
      <div id="container">
        <h1>TODOS</h1>
        <div id="components">
          <Entry todos={todos} setTodos={setTodos} />
          <List todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
