// import { useState } from "react";

function List({ todos, setTodos }) {
  const onToggleDone = (e) => {
    const index = e.target.value;
    let newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.text}</span>
          <span>
            <input
              type="checkbox"
              value={index}
              checked={todo.done}
              onChange={onToggleDone}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
