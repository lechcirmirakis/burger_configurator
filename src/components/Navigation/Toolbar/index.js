import React from "react";
import { ToolbarWrapper, NavigationWrapper } from "./styles";
import Logo from "../../Logo/";

const toolbar = () => {
  return (
    <ToolbarWrapper>
      <Logo />
      <div>MENU</div>
      <NavigationWrapper>...</NavigationWrapper>
    </ToolbarWrapper>
  );
};

export default toolbar;
