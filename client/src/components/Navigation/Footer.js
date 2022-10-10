import React from 'react';
import { socialMedia } from './constans';
import styles from './style-components/styles';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 SPEED. All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Jason Christian - Ieuan Davies - Ajit Singh
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
