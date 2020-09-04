import React from "react";
import { ToolbarWrapper, NavigationWrapper } from "./styles";
import Logo from "../../Logo/";
import NavigationItems from "../NavigationItems";

const toolbar = () => {
  return (
    <ToolbarWrapper>
      <div>MENU</div>
      <Logo />
      <NavigationWrapper>
        <NavigationItems />
      </NavigationWrapper>
    </ToolbarWrapper>
  );
};

export default toolbar;
