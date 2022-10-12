import React from 'react';
import './style-components/navigation.css';
import styles from './style-components/styles';
import { Navbar, Home, Footer } from './index';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from "./../About/About";
import View from "./../View/View";
import Submit from "../Submit/Submit";

const Navigation = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home"  />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view" element={<View />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default Navigation;
