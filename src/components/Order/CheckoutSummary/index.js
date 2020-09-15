import React from "react";
import PropTypes from "prop-types";

import Burger from "../../Burger/";

import { OrderSummaryButton } from "../../../styles/button";
import { CheckoutSummaryWrapper, ButtonsBox } from "./styles";

const checkoutSummary = ({ items, checkoutCancelled, checkoutContinue }) => {
  return (
    <CheckoutSummaryWrapper>
      <h1>We hope it taste well !</h1>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Burger items={items} />
      </div>
      <ButtonsBox style={{ display: "flex" }}>
        <OrderSummaryButton
          onClick={checkoutCancelled}
          cancel
          style={{ marginLeft: "10px" }}
        >
          cancel
        </OrderSummaryButton>
        <OrderSummaryButton onClick={checkoutContinue}>
          continue
        </OrderSummaryButton>
      </ButtonsBox>
    </CheckoutSummaryWrapper>
  );
};

checkoutSummary.propTypes = {
  items: PropTypes.object,
  checkoutCancelled: PropTypes.func.isRequired,
  checkoutContinue: PropTypes.func.isRequired,
};

export default checkoutSummary;
