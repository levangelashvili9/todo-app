import React from "react";
import styled from "styled-components";

function Desktop({ todosArray, filterValue, setFilterValue, clearCompleted }) {
  return (
    <Container>
      <p>{todosArray.filter((el) => !el.completed).length} items left</p>
      <WrapperDiv>
        <Filter
          isActive={filterValue === "All" ? true : false}
          onClick={() => setFilterValue("All")}
        >
          All
        </Filter>
        <Filter
          isActive={filterValue === "Active" ? true : false}
          onClick={() => setFilterValue("Active")}
        >
          Active
        </Filter>
        <Filter
          isActive={filterValue === "Completed" ? true : false}
          onClick={() => setFilterValue("Completed")}
        >
          Completed
        </Filter>
      </WrapperDiv>
      <P onClick={clearCompleted}>Clear Completed</P>
    </Container>
  );
}

export default Desktop;

const Container = styled.div`
  width: 540px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.todoBackgroundColor};

  padding: 16px 24px;
  border-radius: 0 0 5px 5px;

  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.194444px;

  color: ${(props) => props.theme.bottomTextColor};

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
  gap: 18px;
`;

const Filter = styled.p`
  color: ${(props) =>
    props.isActive ? "#3A7CFD" : props.theme.bottomTextColor};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.bottomTextHover};
  }
`;

const P = styled.p`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.bottomTextHover};
  }
`;
