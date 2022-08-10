import React from "react";
import "./filter.css";

function filter({ todos, setTodos, viewMode, setViewMode }) {
  const onChangeView = (view) => () => {
    setViewMode(view);
  };

  const onClearCompleted=(e) => { 
    let newTodos=[...todos];
    newTodos= newTodos.filter((todo) => !todo.done);
    setTodos(newTodos)
  }

  return (
    <>
      {todos.length !== 0 && (
        <div id="filterContainer">
          <span id="todoCount">
            {todos.filter((todo) => !todo.done).length} items left
          </span>
          <span id="filters">
            <button
              type="button"
              onClick={onChangeView("all")}
              className={viewMode === "all" ? "currentView" : "viewOption"}
            >
              All
            </button>
            <button
              type="button"
              onClick={onChangeView("active")}
              className={viewMode === "active" ? "currentView" : "viewOption"}
            >
              Active
            </button>
            <button
              type="button"
              onClick={onChangeView("completed")}
              className={
                viewMode === "completed" ? "currentView" : "viewOption"
              }
            >
              Completed
            </button>
          </span>
          <span id="clearCompleted">
            <button type="button" onClick={onClearCompleted}>Clear completed</button>
          </span>
        </div>
      )}
    </>
  );
}

export default filter;
