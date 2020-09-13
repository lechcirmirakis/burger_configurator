import React from "react";
import { NavigationItemsBox } from "./styles";
import NavItem from "./NavItem";

export const navigationItems = () => {
  return (
    <NavigationItemsBox>
      <NavItem link="/">Burger Builder</NavItem>
      <NavItem link="/orders">Orders</NavItem>
    </NavigationItemsBox>
  );
};

export default navigationItems;
