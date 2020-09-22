import React from "react";
import PropTypes from "prop-types";

import { ControlWrapper, ControlLabel } from "./style";
import { ControlButton } from "../../../../styles/button";

const control = ({ label, itemAdded, itemRemove, disabled }) => {
  return (
    <ControlWrapper>
      <ControlLabel>{label}</ControlLabel>
      <ControlButton onClick={itemAdded} add={false} disabled={disabled}>
        Remove
      </ControlButton>
      <ControlButton onClick={itemRemove} add>
        Add
      </ControlButton>
    </ControlWrapper>
  );
};

control.propTypes = {
  label: PropTypes.string,
  itemAdded: PropTypes.func,
  itemRemove: PropTypes.func,
  disabled: PropTypes.bool,
};

export default control;
