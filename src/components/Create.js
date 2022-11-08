import React, { useState } from "react";
import styled from "styled-components";
import CheckSVG from "../assets/icon-check.svg";

function Create({ todosArray, setTodosArray, input, setInput }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const pressHandler = (e) => {
    if (e.keyCode === 13 && input !== "") {
      const tempArray = [...todosArray];
      tempArray.push({ text: input, completed: isCompleted });
      setTodosArray(tempArray);
      setInput("");
      setIsCompleted(false);
    }
  };

  const clickHandler = () => {
    setIsCompleted((isCompleted) => !isCompleted);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Create a new todo…"
        value={input}
        onChange={changeHandler}
        onKeyDown={(e) => pressHandler(e)}
      ></Input>
      <Circle isCompleted={isCompleted} onClick={clickHandler}>
        {isCompleted ? <CheckImg src={CheckSVG} alt="" /> : null}
      </Circle>
    </Container>
  );
}

export default Create;

const Container = styled.div`
  width: 327px;

  position: relative;

  display: flex;
  align-items: center;

  margin-bottom: 16px;

  @media screen and (min-width: 1080px) {
    width: 540px;
    margin-bottom: 24px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;

  background: ${(props) => props.theme.inputBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 5px;
  border: none;

  padding-left: 52px;
  padding-right: 52px;

  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;

  color: ${(props) => props.theme.inputColor};

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;

    color: ${(props) => props.theme.placeholderColor};
  }

  @media screen and (min-width: 1080px) {
    height: 64px;
    padding-left: 72px;
    padding-right: 92px;

    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;

    ::placeholder {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
    }
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: absolute;

  left: 20px;

  border-radius: 50%;
  background: ${(props) =>
    props.isCompleted
      ? props.theme.completedBackgroundColor
      : props.theme.inputBackgroundColor};
  // background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  border: 1px solid ${(props) => props.theme.circleColor};

  &:hover {
    border: 1px solid #c058f3;
  }

  @media screen and (min-width: 1080px) {
    left: 24px;

    width: 24px;
    height: 24px;
  }
`;

const CheckImg = styled.img`
  width: 10px;

  @media screen and (min-width: 1080px) {
    width: 12px;
  }
`;
