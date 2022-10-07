import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          SPEED
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink end to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/view' activeStyle>
            View
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navigation;
