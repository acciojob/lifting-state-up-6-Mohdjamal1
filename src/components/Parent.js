import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  let [todos, setTodos] = useState([
    { id: 1, text: "Learn React", status: false },
    { id: 2, text: "Build a React app", status: false },
    { id: 3, text: "Deploy the react app", status: false },
  ]);

  function setStatus(id){

    const updateTodo = todos.map((todo)=>(
      todo.id === id ?{...todos, status: true} : todo 
    ))
    setTodos(updateTodo);
  }

  return (
    <div>
        <h1>Parent Component</h1>
        <Child todos={todos} setStatus={setStatus}/>
    </div>
  )
};

export default Parent;
