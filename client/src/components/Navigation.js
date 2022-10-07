import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import styles from "./components-style/Navbar.module.css";

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavLink className={styles.logo} to='/'>
          SPEED
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className={styles.heading} end to='/' activeStyle>
            Home
          </NavLink>
          <NavLink className={styles.heading} to='/view' activeStyle>
            View
          </NavLink>
          <NavLink className={styles.heading} to='/about' activeStyle>
            About
          </NavLink>
          <NavBtnLink className={styles.submit} to='/submit'>Submit</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navigation;
