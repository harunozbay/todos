import { useState } from "react";

function Entry({ todos, setTodos }) {
  const [entry, setEntry] = useState({
    text: "",
    done: false,
    entryMode: false,
  });

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
    <form onSubmit={onSubmitEntry}>
      <input onChange={onChangeInput} placeholder="Add something to be done" />
    </form>
  );
}

export default Entry;
