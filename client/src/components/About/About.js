import React from 'react';
import styles, { layout } from './../Navigation/style-components/styles';

const About = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>About Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The SPEED team is passionate about making the complex simple for
          customers. We give our customers control and confidence that their
          data can be accessed quickly. SPEED is a highly scalable platform
          equally suitable for storing articles data.
        </p>
      </div>
    </section>
  );
};

export default About;
