import React from 'react';
import { features } from '../Navigation/constans';
import styles, { layout } from './../Navigation/style-components/styles';

const FeatureCard = ({icon, title, content, index}) =>(
  <div>
    <div>
      <img src={icon} alt="icon"/>
    </div>
  </div>
);

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
      <div className={`${layout.sectionImg} flex-col`}>
{features.map((feature, index) => (
  <FeatureCard key={feature.id} {...feature} index={index}/>
))}
      </div>
    </section>
  );
};

export default About;
