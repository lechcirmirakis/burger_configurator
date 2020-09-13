import React from "react";
import PropTypes from "prop-types";

import { InputWrapper } from "./styles";

export const input = ({ label, inputType }) => {
  let inputElement = null;

  switch (inputType) {
    case "input":
      inputElement = <input {...props} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} />;
      break;
    default:
      inputElement = <input {...props} />;
  }

  return (
    <InputWrapper>
      <label>{label}</label>
      {inputElement}
    </InputWrapper>
  );
};

input.propTypes = {
  // label: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  // inputType: PropTypes.func,
};

export default input;
