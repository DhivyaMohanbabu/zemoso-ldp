import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  console.log("To do component");
  console.log(todos);
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    console.log("Complete handler");
    console.log(todos);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id)
          return {
            ...item,
            completed: !item.completed,
          };
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="btn-elm" onClick={completeHandler}>
        <i>Mark as complete</i>
      </button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={deleteHandler}>
        <i>Delete</i>
      </button>
    </div>
  );
};
export default Todo;
