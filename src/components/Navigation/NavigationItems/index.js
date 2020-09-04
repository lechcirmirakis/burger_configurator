import React from "react";
import { NavigationItemsBox } from "./styles";
import NavItem from './NavItem';

export const navigationItems = () => {
  return (
    <NavigationItemsBox>
      <NavItem link="/" active>Burger Builder</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </NavigationItemsBox>
  );
};

export default navigationItems;
