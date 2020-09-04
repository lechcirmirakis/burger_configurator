import React from "react";
import burgerLogo from "../../assets/burger-logo.png";
import { LogoWrapper } from "./styles";

const logo = () => {
  return (
    <LogoWrapper>
      <img src={burgerLogo} alt="Burger Logo" />
    </LogoWrapper>
  );
};

export default logo;
