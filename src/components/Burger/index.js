import React from "react";
import PropTypes from "prop-types";

import BurgerItem from "./BurgerItem/";

import { BurgerWrapper } from "./styles";

const burger = ({ items }) => {
  // transform object od items to array of items and
  // check if array dont have any items

  let transformedItems = Object.keys(items)
    .map(itKey => {
      return [...Array(items[itKey])].map((_, i) => (
        <BurgerItem key={itKey + i} type={itKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedItems.length === 0) {
    transformedItems = <p>Please start adding Burger ingredients !</p>;
  }

  return (
    <BurgerWrapper>
      <BurgerItem type="bread-top"></BurgerItem>
      {transformedItems}
      <BurgerItem type="bread-bottom"></BurgerItem>
    </BurgerWrapper>
  );
};

burger.propTypes = {
  items: PropTypes.object,
};

export default burger;
