import React from "react";
import PropTypes from "prop-types";

import NavigationItems from "../NavigationItems";
import NavToggle from "../MobileNav/NavToggle";
import Logo from "../../Logo/";

import { ToolbarWrapper, NavigationWrapper } from "./styles";

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

toolbar.propTypes = {
  openHandler: PropTypes.func,
};

export default toolbar;
