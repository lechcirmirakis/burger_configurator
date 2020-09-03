import React from "react";
import PropTypes from "prop-types";

import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Salad,
  Bacon,
  Cheese,
} from "./styles";

const burgerItem = ({ type }) => {
  let item = null;

  switch (type) {
    case "bread-bottom":
      item = <BreadBottom />;
      break;
    case "bread-top":
      item = (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      );
      break;
    case "meat":
      item = <Meat />;
      break;
    case "cheese":
      item = <Cheese />;
      break;
    case "salad":
      item = <Salad />;
      break;
    case "bacon":
      item = <Bacon />;
      break;
    default:
      item = null;
  }

  return item;
};

burgerItem.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerItem;
