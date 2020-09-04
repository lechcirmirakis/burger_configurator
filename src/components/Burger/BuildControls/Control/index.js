import React from "react";
import { ControlWrapper, ControlLabel } from "./style";
import PropTypes from "prop-types";

import { ControlButton } from "../../../../styles/button";

const control = ({ label, updateItems, type, disabled }) => {
  return (
    <ControlWrapper>
      <ControlLabel>{label}</ControlLabel>
      <ControlButton
        onClick={() => updateItems(type, "remove")}
        add={false}
        disabled={disabled}
      >
        Remove
      </ControlButton>
      <ControlButton onClick={() => updateItems(type, "add")} add>
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
