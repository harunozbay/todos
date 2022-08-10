import "./list.css";

function List({ todos, setTodos, viewMode }) {
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

  const onRemove = (index) => (e) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const renderSingle = (todo, index) => {
    return (
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
            <div className="entryRow">
              {todo.done ? (
                <div className="todoTextDone" onClick={onEntryMode(index)}>
                  {todo.text}
                </div>
              ) : (
                <div className="todoText" onClick={onEntryMode(index)}>
                  {todo.text}
                </div>
              )}

              <button
                type="button"
                className="remove"
                onClick={onRemove(index)}
              >
                x
              </button>
            </div>
          )}
        </>
      </li>
    );
  };

  const renderConditionally = (todo, index) => {
    switch (viewMode) {
      case "all":
        return renderSingle(todo, index);
      case "active":
        return !todo.done ? renderSingle(todo, index) : null;

      case "completed":
        return todo.done ? renderSingle(todo, index) : null;

      default:
        return renderSingle(todo, index);
    }
  };

  return (
    <ul>{todos.map((todo, index) => renderConditionally(todo, index))}</ul>
  );
}

export default List;
