import React from "react";

const Child = ({ todos, setStatus }) => {
  return (
    <div>
      <ul>
        <h1>Child Component</h1>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            {!todo.status && <button onClick={() => setStatus(todo.id)}>Complete</button> }    
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
