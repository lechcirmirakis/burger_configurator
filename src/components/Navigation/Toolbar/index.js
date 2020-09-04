import React from "react";
import { ToolbarWrapper, NavigationWrapper } from "./styles";
import Logo from "../../Logo/";
import NavigationItems from "../NavigationItems";

const toolbar = ({ openHandler }) => {
  return (
    <ToolbarWrapper>
      <Logo height="80%" />
      <div onClick={openHandler}>MENU</div>
      <NavigationWrapper>
        <NavigationItems />
      </NavigationWrapper>
    </ToolbarWrapper>
  );
};

export default toolbar;
