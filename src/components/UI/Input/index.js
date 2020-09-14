import React from "react";
import PropTypes from "prop-types";

import { InputWrapper, LabelBox, InputBox, TextareaBox } from "./styles";

export const input = ({ elementType, elementConfig, value, changed }) => {
  let inputElement = null;

  switch (elementType) {
    case "input":
      inputElement = (
        <InputBox
          onChange={changed}
          className="inputElement"
          {...elementConfig}
          value={value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextareaBox
          onChange={changed}
          className="inputElement"
          {...elementConfig}
          value={value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select onChange={changed} className="inputElement" value={value}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <InputBox className="inputElement" {...elementConfig} value={value} />
      );
  }

  return (
    <InputWrapper>
      <LabelBox>{}</LabelBox>
      {inputElement}
    </InputWrapper>
  );
};

input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

export default input;
