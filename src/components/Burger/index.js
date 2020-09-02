import React from "react";
import { BurgerWrapper } from "./styles";
import BurgerItem from "./BurgerItem/";

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

export default burger;
