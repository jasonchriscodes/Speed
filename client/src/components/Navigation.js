import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
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
          <NavBtnLink to='/submit'>Submit</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navigation;
