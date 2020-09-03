import React from "react";

const orderSummary = ({ items }) => {
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
    </>
  );
};

export default orderSummary;
