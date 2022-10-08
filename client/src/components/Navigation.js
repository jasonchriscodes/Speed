import React from 'react';
import './style-components/navigation.css';
import styles from './style-components/styles';

const Navigation = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>Hero</div>
    </div>
  </div>
);

export default Navigation;
