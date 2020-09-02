import React from "react";
import { ControlWrapper, ControlButton } from "./styles";

const control = ({ label }) => {
  return (
    <ControlWrapper>
      <div>{label}</div>
      <ControlButton>Remove</ControlButton>
      <ControlButton>Add</ControlButton>
    </ControlWrapper>
  );
};

export default control;
