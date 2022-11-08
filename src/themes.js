import { createGlobalStyle } from "styled-components";
import MobileBackgroundLight from "./assets/bg-mobile-light.jpg";
import MobileBackgroundDark from "./assets/bg-mobile-dark.jpg";
import DesktopBackgroundLight from "./assets/bg-desktop-light.jpg";
import DesktopBackgroundDark from "./assets/bg-desktop-dark.jpg";

export const lightTheme = {
  body: "#F2F2F2",
  itemFontColor: "#494C6B",
  BackgroundImgMobile: `url(${MobileBackgroundLight})`,
  BackgroundImgDesktop: `url(${DesktopBackgroundLight})`,

  boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",

  inputColor: "#393A4B",
  inputBackgroundColor: "#fff",
  placeholderColor: "#9495a5",
  circleColor: "#e3e4f1",

  todoBackgroundColor: "#fff",
  dividerLineColor: "#e3e4f1",

  bottomTextColor: "#9495A5",
  bottomTextHover: "#494C6B",

  completedBackgroundColor: "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)",
  completedFontColor: "#D1D2DA",
};

export const darkTheme = {
  body: "#171823",
  itemFontColor: "#C8CBE7",
  BackgroundImgMobile: `url(${MobileBackgroundDark})`,
  BackgroundImgDesktop: `url(${DesktopBackgroundDark})`,

  boxShadow: "0px 35px 50px -15px rgba(0, 0, 0, 0.5)",

  inputColor: "#C8CBE7",
  inputBackgroundColor: "#25273D",
  placeholderColor: "#767992",
  circleColor: "#393A4B",

  todoBackgroundColor: "#25273D",
  dividerLineColor: "#393A4B",

  bottomTextColor: "#5B5E7E",
  bottomTextHover: "#E3E4F1",

  completedBackgroundColor: "linear-gradient(135deg, #55ddff 0%, #c058f3 100%)",
  completedFontColor: "#4D5067",
};

export const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${(props) => props.theme.body};
    background-image: ${(props) => props.theme.BackgroundImgMobile};
    background-repeat: no-repeat;
    background-size: 100vw 28vh;
    
    @media screen and (min-width: 700px) {
      background-image: ${(props) => props.theme.BackgroundImgDesktop};
      background-size: 100vw 32vh;
    }

    @media screen and (min-width: 1440px) {
      background-image: ${(props) => props.theme.BackgroundImgDesktop};
      background-size: 100vw 35vh;
    }
  }

`;
