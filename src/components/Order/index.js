import React from "react";
import PropTypes from "prop-types";
import { OrderWrapper } from "./styles";

const order = ({ name, totalPrice, ingredients }) => {
  return (
    <OrderWrapper>
      <p>{name}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {ingredients.map(ingredient => {
          return (
            <p style={{ marginLeft: "10px" }} key={ingredient.name}>
              {ingredient.name} : {ingredient.quantity}
            </p>
          );
        })}
      </div>
      <p>
        Price: <strong>{totalPrice}</strong>
      </p>
    </OrderWrapper>
  );
};

order.propTypes = {
  name: PropTypes.string,
  totalPrice: PropTypes.number.isRequired,
  ingredients: PropTypes.array.isRequired,
};

export default order;
