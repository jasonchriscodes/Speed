import React from 'react';
import styles, { layout } from './../Navigation/style-components/styles';

const About = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Us</h2>
      </div>
    </section>
  );
};

export default About;
