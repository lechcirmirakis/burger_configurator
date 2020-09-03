import React from "react";
import { BuildControlsWrapper } from "./styles";
import Control from "./Control/";
import { controls } from "../../../static/items";
import PropTypes from "prop-types";

const buildControls = ({ updateItems, disabledInfo }) => {
  const showControls = (control, idx) => {
    const { label, type } = control;
    return (
      <Control
        updateItems={updateItems}
        label={label}
        key={type}
        type={type}
        disabled={disabledInfo[type]}
      />
    );
  };

  return (
    <BuildControlsWrapper>{controls.map(showControls)}</BuildControlsWrapper>
  );
};

buildControls.propTypes = {
  updateItems: PropTypes.func.isRequired,
  disabledInfo: PropTypes.object.isRequired,
};

export default buildControls;
