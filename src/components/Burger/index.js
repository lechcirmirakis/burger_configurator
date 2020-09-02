import React from "react";
import { BurgerWrapper } from "./styles";
import BurgerItem from "./BurgerItem/";

const burger = ({ items }) => {
  const transformedItems = Object.keys(items).map(itKey => {
    return [...Array(items[itKey])].map((_, i) => (
      <BurgerItem key={itKey + i} type={itKey} />
    ));
  });

  return (
    <BurgerWrapper>
      <BurgerItem type="bread-top"></BurgerItem>
      {transformedItems}
      <BurgerItem type="bread-bottom"></BurgerItem>
    </BurgerWrapper>
  );
};

export default burger;
