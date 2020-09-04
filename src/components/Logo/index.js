import React from "react";
import burgerLogo from "../../assets/burger-logo.png";
import { LogoWrapper } from "./styles";
import PropTypes from "prop-types";

const logo = ({ height }) => {
  return (
    <LogoWrapper style={{ height: height }}>
      <img src={burgerLogo} alt="Burger Logo" />
    </LogoWrapper>
  );
};

logo.propTypes = {
  height: PropTypes.string.isRequired,
};

export default logo;
