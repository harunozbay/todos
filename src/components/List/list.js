// import { useState } from "react";

function List({ todos, setTodos }) {
  const onToggleDone = (e) => {
    const index = e.target.value;
    let newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const onTypeText = (index) => (e) => {
    let newTodos = [...todos];
    newTodos[index].text = e.target.value;
    setTodos(newTodos);
  };

  const onEntryMode = (index) => (e) => {
    let newTodos = [...todos];
    newTodos[index].entryMode = true;
    setTodos(newTodos);
  };

  const onBlurInput = (index) => (e) => {
    let newTodos = [...todos];
    newTodos[index].entryMode = false;
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <div className="checkbox">
            <input
              type="checkbox"
              value={index}
              checked={todo.done}
              onChange={onToggleDone}
            />
          </div>
          <>
            {todo.entryMode ? (
              <div className="editEntry">
                <input
                  autoFocus
                  value={todo.text}
                  onChange={onTypeText(index)}
                  onBlur={onBlurInput(index)}
                />
              </div>
            ) : (
              <div onClick={onEntryMode(index)}>{todo.text}</div>
            )}
          </>
        </li>
      ))}
    </ul>
  );
}

export default List;
