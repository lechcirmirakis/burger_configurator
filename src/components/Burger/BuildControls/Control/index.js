import React from "react";
import { ControlWrapper, ControlButton, ControlLabel } from "./style";
import PropTypes from "prop-types";

const control = ({ label, updateItems, type, disabled }) => {
  return (
    <ControlWrapper>
      <ControlLabel>{label}</ControlLabel>
      <ControlButton
        onClick={() => updateItems(type, "remove")}
        className="Less"
        disabled={disabled}
      >
        Remove
      </ControlButton>
      <ControlButton onClick={() => updateItems(type, "add")} className="More">
        Add
      </ControlButton>
    </ControlWrapper>
  );
};

control.propTypes = {
  label: PropTypes.string,
  updateItems: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default control;
