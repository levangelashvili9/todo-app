import React from "react";
import styled from "styled-components";
import AllTodos from "./AllTodos";
import CompletedTodos from "./CompletedTodos";
import ActiveTodos from "./ActiveTodos";

function Todos({ todosArray, setTodosArray, filterValue }) {
  const deleteHandler = (id) => {
    const tempArr = [...todosArray];
    tempArr.splice(id, 1);
    setTodosArray(tempArr);
  };

  const completedHandler = (id) => {
    const tempArr = [...todosArray];
    tempArr[id].completed = !tempArr[id].completed;
    setTodosArray(tempArr);
  };

  return (
    <Container>
      {filterValue === "All" && (
        <AllTodos
          todosArray={todosArray}
          deleteHandler={deleteHandler}
          completedHandler={completedHandler}
        />
      )}
      {filterValue === "Completed" && (
        <CompletedTodos
          todosArray={todosArray}
          deleteHandler={deleteHandler}
          completedHandler={completedHandler}
        />
      )}
      {filterValue === "Active" && (
        <ActiveTodos
          todosArray={todosArray}
          deleteHandler={deleteHandler}
          completedHandler={completedHandler}
        />
      )}
    </Container>
  );
}

export default Todos;

const Container = styled.div`
  width: 327px;
  background: ${(props) => props.theme.todoBackgroundColor};
  border-radius: 5px 5px 0 0;

  box-shadow: ${(props) => props.theme.boxShadow};

  @media screen and (min-width: 1080px) {
    width: 540px;
  }
`;
