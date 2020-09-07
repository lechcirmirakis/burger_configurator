import React from "react";
import { ToolbarWrapper, NavigationWrapper } from "./styles";
import Logo from "../../Logo/";
import NavigationItems from "../NavigationItems";
import NavToggle from '../MobileNav/NavToggle';

const toolbar = ({ openHandler }) => {
  return (
    <ToolbarWrapper>
      <Logo height="80%" />
      <NavToggle clicked={openHandler}>MENU</NavToggle>
      <NavigationWrapper>
        <NavigationItems />
      </NavigationWrapper>
    </ToolbarWrapper>
  );
};

export default toolbar;
