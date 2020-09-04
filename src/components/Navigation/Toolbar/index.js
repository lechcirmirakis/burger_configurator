import React from "react";
import { ToolbarWrapper, NavigationWrapper } from "./styles";
import Logo from "../../Logo/";
import NavigationItems from "../NavigationItems";

const toolbar = () => {
  return (
    <ToolbarWrapper>
      <Logo height="80%" />
      <div>MENU</div>
      <NavigationWrapper>
        <NavigationItems />
      </NavigationWrapper>
    </ToolbarWrapper>
  );
};

export default toolbar;
