import React from "react";
import Burger from "../../Burger/";
import { OrderSummaryButton } from "../../../styles/button";
import { CheckoutSummaryWrapper, ButtonsBox } from "./styles";

const checkoutSummary = ({ items }) => {
  return (
    <CheckoutSummaryWrapper>
      <h1>We hope it taste well !</h1>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Burger items={items} />
      </div>
      <ButtonsBox style={{ display: "flex" }}>
        <OrderSummaryButton cancel style={{ marginLeft: "10px" }}>
          cancel
        </OrderSummaryButton>
        <OrderSummaryButton>continue</OrderSummaryButton>
      </ButtonsBox>
    </CheckoutSummaryWrapper>
  );
};

export default checkoutSummary;
