import React from 'react';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/planets">Planets</NavItem>
        <NavItem to="/stars">Stars</NavItem>
        <NavItem to="/galaxies">Galaxies</NavItem>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
