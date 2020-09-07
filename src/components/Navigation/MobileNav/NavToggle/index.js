import React from "react";
import { NavToggleBox } from "./styles";

const navToggle = ({ clicked }) => {
  return (
    <NavToggleBox onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </NavToggleBox>
  );
};

export default navToggle;
