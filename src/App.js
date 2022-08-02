import "./App.css";
import { useState } from "react";
import List from "./components/List/list";
import Entry from "./components/Entry/entry";

function App() {
  const [todos, setTodos] = useState([
    { text: "Get up early", done: true },
    { text: "Have a breakfast", done: false },
    { text: "Brush your teeth", done: false },
  ]);
  return (
    <div>
      <Entry todos={todos} setTodos={setTodos}></Entry>
      <List todos={todos} setTodos={setTodos}></List>
    </div>
  );
}

export default App;
