import React from "react";
import PropTypes from "prop-types";

import { InputWrapper, LabelBox, InputBox, TextareaBox } from "./styles";

export const input = ({
  elementType,
  elementConfig,
  value,
  changed,
  invalid,
  shouldValidate,
  touched,
}) => {
  let inputElement = null;
  const inputCLasses = ["inputElement"];

  if (invalid && shouldValidate && touched) {
    inputCLasses.push("invalid");
  }

  switch (elementType) {
    case "input":
      inputElement = (
        <InputBox
          onChange={changed}
          className={inputCLasses.join(" ")}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextareaBox
          onChange={changed}
          className={inputCLasses.join(" ")}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={changed}
          className={inputCLasses.join(" ")}
          value={value}
        >
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
        <InputBox
          className={inputCLasses.join(" ")}
          {...elementConfig}
          value={value}
        />
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
  invalid: PropTypes.bool,
  changed: PropTypes.func.isRequired,
  shouldValidate: PropTypes.object,
  touched: PropTypes.bool,
};

export default input;
