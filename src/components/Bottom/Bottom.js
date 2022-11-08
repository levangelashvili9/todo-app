import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

function Bottom({ todosArray, setTodosArray, filterValue, setFilterValue }) {
  const clearCompleted = () => {
    setTodosArray(todosArray.filter((el) => !el.completed));
  };

  return (
    <div>
      <Mobile
        todosArray={todosArray}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        clearCompleted={clearCompleted}
      />
      <Desktop
        todosArray={todosArray}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default Bottom;
