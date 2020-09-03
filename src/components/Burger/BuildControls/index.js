import React from "react";
import { BuildControlsWrapper } from "./styles";
import Control from "./Control/";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = () => {
  const showControls = (control, idx) => {
    const { label, type } = control;
    return <Control label={label} key={type} />;
  };

  return (
    <BuildControlsWrapper>{controls.map(showControls)}</BuildControlsWrapper>
  );
};

export default buildControls;
