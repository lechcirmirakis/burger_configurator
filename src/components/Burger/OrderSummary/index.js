import React from "react";
import { OrderSummaryButton } from "../../../styles/button";

const orderSummary = ({ items, cancelOrderHandler, continueOrderHandler }) => {
  const itemsToShow = Object.keys(items).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>: {items[key]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following items:</p>
      <ul>{itemsToShow}</ul>
      <p>Continue to Checkout ?</p>
      <div style={{ display: 'flex' }}>
        <OrderSummaryButton onClick={cancelOrderHandler} cancel>
          cancel
        </OrderSummaryButton>
        <OrderSummaryButton onClick={continueOrderHandler}>
          continue
        </OrderSummaryButton>
      </div>
    </>
  );
};

export default orderSummary;
