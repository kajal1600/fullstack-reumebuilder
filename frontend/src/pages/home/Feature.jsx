

import React from 'react';
import FEATUREIMG from '../../assets/Featureimg.png';
import ARROWONE from '../../assets/Arrow1.png';
import ARROWTWO from '../../assets/Arrow2.png';

function Feature() {
  return (
    <>
      <p className='text-4xl font-bold text-violet-700 text-center px-20 mt-30'>Features</p>
      <div className='w-full px-20 flex flex-col md:flex-row lg:gap-x-60  mt-20 gap-10'>
        <div className='w-full md:w-[50%] flex flex-col gap-y-10 text-center md:text-left'>
          <p className='text-2xl font-bold md:text-xl  md:font-bold xl:text-2xl' >30+ Templates</p>
          <p className='text-lg xl:text-lg xl:w-2/2 xl:pr-30 md:text-xl  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis</p>
          <img src={FEATUREIMG} alt='' className='mx-auto md:mx-0' />
          <p className='text-2xl font-medium md:text-xl md:font-bold xl:text-2xl'>Easy to Customize</p>
          <p className='text-lg  xl:text-lg xl:w-2/2 xl:pr-30 md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis</p>
        </div>
        <div className='w-full md:w-[50%] flex flex-col items-center    md:ml-50 lg:ml-0  md:mt-20  md:text-left'>
          <img src={ARROWONE} alt='' className=' md:mx-0 xl:-ml-110 lg:h-30 xl:h-auto md:-mt-8' />
          <p className='text-2xl mt-10 font-bold md:text-xl lg:w-2/3 lg:mr-40 xl:text-2xl '>Free Cover Letter</p>
          <p className=' mb-10 mt-10 text-lg  xl:text-lg  xl:w-2/2 xl:pr-30 md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis</p>
          <img src={ARROWTWO} alt='' className='mx-auto md:mx-0  md:-ml-30 xl:-ml-110 lg:h-50 xl:h-auto ' />
        </div>
      </div>
    </>
  );
}

export default Feature;












