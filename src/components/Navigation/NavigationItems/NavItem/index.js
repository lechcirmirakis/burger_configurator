import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { NavItemBox } from "./styles";

const navItem = ({ children, link }) => {
  return (
    <NavItemBox>
      <NavLink exact to={link}>
        {children}
      </NavLink>
    </NavItemBox>
  );
};

navItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default navItem;
