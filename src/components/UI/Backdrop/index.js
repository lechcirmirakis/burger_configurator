import React from "react";
import PropTypes from "prop-types";

import { BackdropWrapper } from "./styles";

const backdrop = ({ show, click }) =>
  show ? <BackdropWrapper onClick={click} /> : null;

backdrop.propTypes = {
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  click: PropTypes.func,
};

export default backdrop;
