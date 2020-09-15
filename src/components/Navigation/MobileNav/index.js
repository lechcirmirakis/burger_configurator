import React from "react";
import PropTypes from "prop-types";

import NavigationItems from "../NavigationItems";
import Backdrop from "../../UI/Backdrop";

import Logo from "../../Logo";
import { MobileNavWrapper } from "./styles";

const mobileNav = ({ closed, open }) => {
  //...

  return (
    <>
      <Backdrop show={open} click={closed} />
      <MobileNavWrapper open={open}>
        <Logo height="10%" />
        <nav>
          <NavigationItems />
        </nav>
      </MobileNavWrapper>
    </>
  );
};

mobileNav.propTypes = {
  closed: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default mobileNav;
