import React from 'react';
import styles from './style-components/styles';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 SPEED. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
