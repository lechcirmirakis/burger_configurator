import React from "react";
import { BackdropWrapper } from "./styles";
import PropTypes from "prop-types";

const backdrop = ({ show, click }) =>
  show ? <BackdropWrapper onClick={click} /> : null;

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func,
};

export default backdrop;
