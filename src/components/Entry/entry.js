import { useState, useEffect, useRef } from "react";
import "./entry.css";

function Entry({ todos, setTodos }) {
  const [entry, setEntry] = useState({
    text: "",
    done: false,
    entryMode: false,
  });

  let toggleAllBtn = useRef();

  useEffect(() => {
    if (toggleAllBtn.current) {
      if (todos.every((todo) => todo.done))
        toggleAllBtn.current.style.color = "#474747";
      else toggleAllBtn.current.style.color = "#9b9b9b";
    }
  }, [todos]);

  const onToggleAll = (e) => {
    let newTodos = [...todos];
    // if all is done then uncheck all
    if (todos.every((todo) => todo.done)) {
      newTodos.forEach((todo) => {
        todo.done = false;
      });
      setTodos(newTodos);
    }
    // if some is undone then check all
    else {
      newTodos.forEach((todo) => {
        todo.done = true;
      });
      setTodos(newTodos);
    }
  };

  const onSubmitEntry = (e) => {
    e.preventDefault();
    if (entry.text === "") return;
    setTodos([...todos, entry]);
    setEntry({ ...entry, text: "" }); // reset entry variabe
    e.target[0].value = ""; // clear input
  };

  const onChangeInput = (e) => {
    setEntry({ ...entry, text: e.target.value });
  };

  return (
    <div id="newTodoEntry">
      <>
        {todos.length !== 0 && (
          <button
            type="button"
            id="toggleAll"
            onClick={onToggleAll}
            ref={toggleAllBtn}
          >
            &gt;
          </button>
        )}
      </>
      <form onSubmit={onSubmitEntry}>
        <input
          onChange={onChangeInput}
          placeholder="Add something to be done"
        />
      </form>
    </div>
  );
}

export default Entry;
