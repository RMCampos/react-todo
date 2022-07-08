import React from "react";

const Filter = ({ setStatus }) => {

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">Show all</option>
        <option value="completed">Show completed</option>
        <option value="uncompleted">Show uncompleted</option>
      </select>
    </div>
  )
};

export default Filter;