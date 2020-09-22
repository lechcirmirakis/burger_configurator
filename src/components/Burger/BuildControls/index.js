import React from "react";
import PropTypes from "prop-types";

import { controls } from "../../../static/items";

import Control from "./Control/";

import { BuildControlsWrapper } from "./styles";
import { OrderButton } from "../../../styles/button";

const buildControls = ({
  itemAdded,
  itemRemove,
  disabledInfo,
  currentPrice,
  isPurchasable,
  ordered,
}) => {
  const showControls = control => {
    const { label, type } = control;

    return (
      <Control
        itemAdded={() => itemRemove(type)}
        itemRemove={() => itemAdded(type)}
        label={label}
        key={type}
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
  itemAdded: PropTypes.func.isRequired,
  itemRemove: PropTypes.func.isRequired,
  ordered: PropTypes.func.isRequired,
  currentPrice: PropTypes.number,
  isPurchasable: PropTypes.bool,
  disabledInfo: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default buildControls;
