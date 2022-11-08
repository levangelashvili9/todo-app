import React from "react";
import { CrossImg, TodoItem, Circle, CheckImg, Text } from "./Todo.styled";
import CheckSVG from "../../assets/icon-check.svg";
import CrossSVG from "../../assets/icon-cross.svg";

function AllTodos({ todosArray, completedHandler, deleteHandler }) {
  return (
    <>
      {todosArray.map((todo, id) => {
        return (
          <TodoItem key={id}>
            <Circle
              onClick={() => completedHandler(id)}
              isCompleted={todo.completed}
            >
              {todo.completed ? <CheckImg src={CheckSVG} alt="" /> : null}
            </Circle>
            <Text isCompleted={todo.completed}>{todo.text}</Text>
            <CrossImg src={CrossSVG} onClick={() => deleteHandler(id)} />
          </TodoItem>
        );
      })}
    </>
  );
}

export default AllTodos;
