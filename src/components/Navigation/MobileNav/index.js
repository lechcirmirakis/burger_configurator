import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import { MobileNavWrapper } from "./styles";

const mobileNav = () => {
  //...

  return (
    <MobileNavWrapper>
      <Logo height="10%" />
      <nav>
        <NavigationItems />
      </nav>
    </MobileNavWrapper>
  );
};

export default mobileNav;
