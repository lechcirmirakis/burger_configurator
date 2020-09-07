import React from "react";
import { BuildControlsWrapper } from "./styles";
import { OrderButton } from "../../../styles/button";
import Control from "./Control/";
import { controls } from "../../../static/items";
import PropTypes from "prop-types";

const buildControls = ({
  updateItems,
  disabledInfo,
  currentPrice,
  isPurchasable,
  ordered,
}) => {
  const showControls = control => {
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
      <OrderButton onClick={ordered} disabled={isPurchasable}>
        ORDER NOW
      </OrderButton>
    </BuildControlsWrapper>
  );
};

buildControls.propTypes = {
  updateItems: PropTypes.func.isRequired,
  ordered: PropTypes.func.isRequired,
  currentPrice: PropTypes.number,
  isPurchasable: PropTypes.bool,
  disabledInfo: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default buildControls;
