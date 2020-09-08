import React from "react";
import { BackdropWrapper } from "./styles";
import PropTypes from "prop-types";

const backdrop = ({ show, click }) =>
  show ? <BackdropWrapper onClick={click} /> : null;

backdrop.propTypes = {
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  click: PropTypes.func,
};

export default backdrop;
