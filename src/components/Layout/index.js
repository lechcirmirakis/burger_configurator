import React from "react";
import { MainWrapper } from "./styles";
import Toolbar from "../Navigation/Toolbar";
import MobileNav from '../Navigation/MobileNav';

const layout = props => {
  return (
    <>
      <Toolbar />
      <MobileNav />
      <MainWrapper>{props.children}</MainWrapper>
    </>
  );
};

export default layout;
