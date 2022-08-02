import { useState } from "react";

function Entry({ todos, setTodos }) {
  const [entry, setEntry] = useState({ text: "", done: false });

  const onSubmitEntry = (e) => {
    e.preventDefault();
    if (entry.text === "") return;
    setTodos([...todos, entry]);
  };

  const onChangeInput = (e) => {
    setEntry({ ...entry, text: e.target.value });
  };

  return (
    <div>
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
