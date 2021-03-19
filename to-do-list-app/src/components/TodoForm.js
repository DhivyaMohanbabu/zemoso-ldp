import React, { useState } from "react";

const TodoForm = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input className="input-box" value={inputText} type="text" onChange={inputHandler} />
      <button className="btn-elm" onClick={submitHandler} type="submit">
        ADD
      </button>
      <select onChange={statusHandler} name="todos">
        <option value="all">ALL</option>
        <option value="completed">COMPLETED</option>
        <option value="uncompleted">UNCOMPLETED</option>
      </select>
    </form>
  );
};

export default TodoForm;
