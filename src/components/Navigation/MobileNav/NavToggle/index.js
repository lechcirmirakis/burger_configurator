import React from "react";
import { NavToggleBox } from "./styles";
import PropTypes from "prop-types";

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
