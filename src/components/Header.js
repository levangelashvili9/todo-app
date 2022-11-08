import React from "react";
import styled from "styled-components";
import MoonSVG from "../assets/icon-moon.svg";
import SunSVG from "../assets/icon-sun.svg";

function Header({ theme, setTheme, themeToggler }) {
  return (
    <Container>
      <Heading>TODO</Heading>
      <Img src={theme === "light" ? MoonSVG : SunSVG} onClick={themeToggler} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 327px;
  margin-top: 48px;
  margin-bottom: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1080px) {
    width: 540px;
  }
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;

  letter-spacing: 11px;

  color: #ffffff;

  @media screen and (min-width: 1080px) {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;

  cursor: pointer;

  @media screen and (min-width: 1080px) {
    width: 26px;
    height: 26px;
  }
`;
