import React from "react";


const Form = ({ inputText, todos, setTodos, setInputText, inputTask, setInputTask }) => {
  // Here I can write javascript code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const inputTaskHandler = (e) => {
    setInputTask(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000, link: '' },
    ]);
    setInputText("");
    setInputTask("");
  };

  return (
    <form>
      <input placeholder="task" value={inputTask} onChange={inputTaskHandler} type="text" className="task-input" />
      <input placeholder="description" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  )
};

export default Form;