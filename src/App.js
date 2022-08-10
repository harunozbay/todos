import "./App.css";
import { useState } from "react";
import List from "./components/List/list";
import Entry from "./components/Entry/entry";
import Filter from "./components/Filter/filter";


function App() {
  const [todos, setTodos] = useState([
    { text: "Get up early", done: true, entryMode: false },
    { text: "Have a breakfast", done: false, entryMode: false },
    { text: "Brush your teeth", done: false, entryMode: false },
  ]);

  const [viewMode,setViewMode]=useState("all");

  return (
    <div id="App">
      <div id="container">
        <h1>todos</h1>
        <div id="components">
          <Entry todos={todos} setTodos={setTodos} />
          <List todos={todos} setTodos={setTodos} viewMode={viewMode}/>
          <Filter todos={todos} setTodos={setTodos} viewMode={viewMode} setViewMode={setViewMode}/>
        </div>
      </div>
    </div>
  );
}

export default App;
