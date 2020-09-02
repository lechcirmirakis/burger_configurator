import React from "react";
import { BurgerWrapper } from "./styles";
import BurgerItem from "./BurgerItem/";

const burger = () => {
  return (
    <BurgerWrapper>
      <BurgerItem type="bread-top"></BurgerItem>
      <BurgerItem type="meat"></BurgerItem>
      <BurgerItem type="cheese"></BurgerItem>
      <BurgerItem type="bread-bottom"></BurgerItem>
    </BurgerWrapper>
  );
};

export default burger;
