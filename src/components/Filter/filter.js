import React from "react";

function filter({ todos }) {
  return (
    <div>
      <div>{todos.length} items left</div>
      <div>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  );
}

export default filter;
