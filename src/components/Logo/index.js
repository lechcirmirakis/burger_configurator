import React from "react";
import PropTypes from "prop-types";

import burgerLogo from "../../assets/burger-logo.png";
import { LogoWrapper } from "./styles";

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
