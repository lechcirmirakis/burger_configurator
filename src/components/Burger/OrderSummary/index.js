import React from "react";
import { OrderSummaryButton } from "../../../styles/button";
import PropTypes from "prop-types";

const orderSummary = ({
  items,
  cancelOrderHandler,
  continueOrderHandler,
  price,
}) => {
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
      <p>
        <strong>Total Price: </strong>
        {price}
      </p>
      <p>Continue to Checkout ?</p>
      <div style={{ display: "flex" }}>
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

orderSummary.propTypes = {
  price: PropTypes.number.isRequired,
  continueOrderHandler: PropTypes.func.isRequired,
  cancelOrderHandler: PropTypes.func.isRequired,
  items: PropTypes.objectOf(PropTypes.number),
};

export default orderSummary;
