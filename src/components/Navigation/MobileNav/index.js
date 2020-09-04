import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import { MobileNavWrapper } from "./styles";
import Backdrop from "../../UI/Backdrop";
import PropTypes from "prop-types";

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
