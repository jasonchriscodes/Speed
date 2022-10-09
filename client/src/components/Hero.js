import React from 'react';
import styles from './style-components/styles';
import GetStarted from "./GetStarted";
import { robot } from '../assets';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation </span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Data Management.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the data storage most likely to fit your needs. 
We record articles digitally and saved for future access.</p>

    </div>
<div>
  <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5]'/>
  <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
  <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
  <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
</div>
  </section>
);
export default Hero;
