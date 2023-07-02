import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        activeClassName="active" // Add an active class for the current route
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
