import React from "react";
import { MainWrapper } from "./styles";
import Toolbar from "../Navigation/Toolbar";

const layout = props => {
  return (
    <>
      <Toolbar>Toolbar, SideDrawer, Backdrop</Toolbar>
      <MainWrapper>{props.children}</MainWrapper>
    </>
  );
};

export default layout;
