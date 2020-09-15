import React from "react";
import PropTypes from "prop-types";

import { NavToggleBox } from "./styles";

const navToggle = ({ clicked }) => {
  return (
    <NavToggleBox onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </NavToggleBox>
  );
};

navToggle.propTypes = {
  clicked: PropTypes.func,
};

export default navToggle;
