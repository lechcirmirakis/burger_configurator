import React from "react";
import { ToolbarWrapper, NavigationWrapper } from "./styles";
import Logo from "../../Logo/";
import NavigationItems from "../NavigationItems";

const toolbar = () => {
  return (
    <ToolbarWrapper>
      <div>MENU</div>
      <Logo height='80%'/>
      <NavigationWrapper>
        <NavigationItems />
      </NavigationWrapper>
    </ToolbarWrapper>
  );
};

export default toolbar;
