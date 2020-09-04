import React from "react";
import { NavItemBox } from "./styles";

const navItem = ({ children, active, link }) => {
  return (
    <NavItemBox>
      <a href={link} className={active ? "active" : null}>
        {children}
      </a>
    </NavItemBox>
  );
};

export default navItem;
