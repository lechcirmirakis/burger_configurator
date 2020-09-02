import React from "react";

import { MainWrapper } from "./styles";

const layout = props => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <MainWrapper>{props.children}</MainWrapper>
    </>
  );
};

export default layout;
