import React from "react";
import { BuildControlsWrapper, OrderButton } from "./styles";
import Control from "./Control/";
import { controls } from "../../../static/items";
import PropTypes from "prop-types";

const buildControls = ({ updateItems, disabledInfo, currentPrice }) => {
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
    <BuildControlsWrapper>
      <p>Current Price: {currentPrice}</p>
      {controls.map(showControls)}
      <OrderButton>ORDER NOW</OrderButton>
    </BuildControlsWrapper>
  );
};

buildControls.propTypes = {
  updateItems: PropTypes.func.isRequired,
  disabledInfo: PropTypes.object.isRequired,
  currentPrice: PropTypes.number,
};

export default buildControls;
