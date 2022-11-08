import React from "react";
import { CrossImg, TodoItem, Circle, Text } from "./Todo.styled";
import CrossSVG from "../../assets/icon-cross.svg";

function CompletedTodos({ todosArray, completedHandler, deleteHandler }) {
  return (
    <>
      {todosArray.map((todo, id) => {
        if (!todo.completed) {
          return (
            <TodoItem key={id}>
              <Circle
                onClick={() => completedHandler(id)}
                isCompleted={todo.completed}
              ></Circle>
              <Text isCompleted={todo.completed}>{todo.text}</Text>
              <CrossImg src={CrossSVG} onClick={() => deleteHandler(id)} />
            </TodoItem>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

export default CompletedTodos;
