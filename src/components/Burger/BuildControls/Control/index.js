import React from "react";
import { ControlWrapper, ControlButton, ControlLabel } from "./style";

const control = ({ label }) => {
  return (
    <ControlWrapper>
      <ControlLabel>{label}</ControlLabel>
      <ControlButton className="Less">Remove</ControlButton>
      <ControlButton className="More">Add</ControlButton>
    </ControlWrapper>
  );
};

export default control;
