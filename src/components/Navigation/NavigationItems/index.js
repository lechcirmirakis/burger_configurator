import React from "react";

import NavItem from "./NavItem";

import { NavigationItemsBox } from "./styles";

export const navigationItems = () => {
  return (
    <NavigationItemsBox>
      <NavItem link="/">Burger Builder</NavItem>
      <NavItem link="/orders">Orders</NavItem>
    </NavigationItemsBox>
  );
};

export default navigationItems;
