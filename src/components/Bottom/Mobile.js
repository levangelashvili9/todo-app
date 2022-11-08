import React from "react";
import styled from "styled-components";

function Mobile({ todosArray, filterValue, setFilterValue, clearCompleted }) {
  return (
    <Container>
      <Top>
        <p>{todosArray.filter((el) => !el.completed).length} items left</p>
        <P onClick={clearCompleted}>Clear Completed</P>
      </Top>
      <Bottom>
        <Filter
          onClick={() => setFilterValue("All")}
          isActive={filterValue === "All" ? true : false}
        >
          All
        </Filter>
        <Filter
          onClick={() => setFilterValue("Active")}
          isActive={filterValue === "Active" ? true : false}
        >
          Active
        </Filter>
        <Filter
          onClick={() => setFilterValue("Completed")}
          isActive={filterValue === "Completed" ? true : false}
        >
          Completed
        </Filter>
      </Bottom>
    </Container>
  );
}

export default Mobile;

const Container = styled.div`
  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

const Top = styled.div`
  width: 327px;
  height: 52px;

  display: flex;
  justify-content: space-between;

  padding: 16px 20px 22px;

  background: ${(props) => props.theme.todoBackgroundColor};
  border-radius: 0 0 5px 5px;

  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;

  color: ${(props) => props.theme.bottomTextColor};

  margin-bottom: 16px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Bottom = styled.div`
  width: 327px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;

  background: ${(props) => props.theme.todoBackgroundColor};

  border-radius: 5px;

  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height */

  letter-spacing: -0.194444px;

  color: ${(props) => props.theme.bottomTextColor};

  color: ${(props) => props.theme.bottomTextColor};
  box-shadow: ${(props) => props.theme.boxShadow};
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
