import React from "react";
import PropTypes from "prop-types";

import { InputWrapper, LabelBox, InputBox, TextareaBox } from "./styles";

export const input = ({ placeholder, inputType }, props) => {
  let inputElement = null;

  switch (inputType) {
    case "input":
      inputElement = <InputBox className='inputElement' {...props} />;
      break;
    case "textarea":
      inputElement = <TextareaBox className='inputElement' {...props} />;
      break;
    default:
      inputElement = <InputBox className='inputElement' {...props} />;
  }

  return (
    <InputWrapper>
      <LabelBox>{placeholder}</LabelBox>
      {inputElement}
    </InputWrapper>
  );
};

input.propTypes = {
  // label: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  // inputType: PropTypes.func,
};

export default input;
