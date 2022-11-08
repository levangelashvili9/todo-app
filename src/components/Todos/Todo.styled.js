import styled from "styled-components";

export const CrossImg = styled.img`
  width: 12px;

  cursor: pointer;
  position: absolute;
  right: 20px;

  @media screen and (min-width: 1080px) {
    width: 18px;
    display: none;
  }
`;

export const TodoItem = styled.div`
  height: 52px;
  padding-left: 52px;

  position: relative;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.dividerLineColor};

  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.166667px;

  color: ${(props) => props.theme.itemFontColor};

  @media screen and (min-width: 1080px) {
    height: 62px;
    padding-left: 72px;

    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;

    &:hover ${CrossImg} {
      display: block;
    }
  }
`;

export const Circle = styled.div`
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

export const CheckImg = styled.img`
  width: 10px;

  @media screen and (min-width: 1080px) {
    width: 12px;
  }
`;

export const Text = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  color: ${(props) =>
    props.isCompleted
      ? props.theme.completedFontColor
      : props.theme.itemFontColor};
`;
