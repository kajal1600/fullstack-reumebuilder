// import React from 'react'
// import BACKIMG from '../../assets/Backimg.png'
// import FRONTIMG from '../../assets/Frontimg.png'
// import { FORMROUTES } from '../../constant'
// import { Link } from 'react-router-dom'



// function Dreamjobs() {
//   return (
// <>
// <div className='px-20 flex mt-40'>
//     <div className='w-full flex flex-col gap-y-10 '>
// <p className='text-gray-600 text-2xl font-bold'>BOOST YOUR CAREER CHASING</p>
// <p className='text-4xl font-bold w-1/3 pr-7'>Land your dream job with already made
// <span className='text-violet-800'>Eye catchy Resumes.</span></p>
// <p className='text-gray-600 text-xl w-96 '>Create awesome resumes with one of our template in just few seconds.</p>

// <Link to={FORMROUTES.PERSONALINFORMATION}>
// <button className=' w-60 py-2 text-white cursor-pointer hover:bg-violet-950 hover:text-lg rounded-2xl text-xl bg-violet-800'>Create Resume for free</button>
// </Link>
//     </div>
//     <div className='relative'>
//         <img src={BACKIMG} alt=""  />
//         <div className='h-84 w-80 bg-white absolute top-10 right-40'>
//         <img src={FRONTIMG} alt="" className='absolute left-10 top-4' />
//         <div className='absolute bottom-0 left-10' >
//         <p className='font-bold text-xl' >Mujhiz_crEAtiVO</p>
//         <p className='pb-4'>UI Designer</p>
//         </div>
//         </div>
//     </div>

// </div>

// </>
//   )
// }

// export default Dreamjobs











import React from 'react';
import BACKIMG from '../../assets/Backimg.png';
import FRONTIMG from '../../assets/Frontimg.png';
import { FORMROUTES } from '../../constant';
import { Link } from 'react-router-dom';

function Dreamjobs() {
  return (
    <div className='px-6 md:px-20 flex flex-col  md:flex-row mt-20 md:mt-40 items-center md:items-start'>
      <div className='w-full flex flex-col gap-y-6 xl:gap-y-10 md:gap-y-5 text-center md:text-left'>
        <p className='text-gray-600 text-xl md:text-lg xl:text-2xl font-bold '>BOOST YOUR CAREER CHASING</p>
        <p className='text-2xl w-2/3 ml-15 md:text-3xl md:ml-0   md:w-2/2 md:pr-10 lg:w-5/7  lg:text-4xl xl:text-5xl   font-bold xl:w-2/4 xl:pr-20'>
          Land your dream job with already made
          <span className='text-violet-800'> Eye-catchy Resumes.</span>
        </p>
        <p className='text-gray-600 text-lg xl:text-2xl   md:text-xl xl:w-2/4 lg:w-2/3 lg:pr-12 lg:text-xl  md:w-2/2 md:pr-15'>
          Create awesome resumes with one of our templates in just a few seconds.
        </p>
        <Link to={FORMROUTES.PERSONALINFORMATION}>
          <button className='w-48 md:w-60 py-2 text-white cursor-pointer hover:bg-violet-950 hover:text-lg rounded-2xl text-lg md:text-xl bg-violet-800'>
            Create Resume for free
          </button>
        </Link>
      </div>
      <div className='relative mt-10  md:mt-0'>
        <img src={BACKIMG} alt='' className='w-64 md:h-full md:w-full ' />
        <div className='h-72 w-64 md:h-60   md:w-60  lg:h-78 lg:right-30 lg:w-60 bg-white absolute top-6 md:top-10 xl:right-60 right-10  shadow-lg rounded-xl'>
          <img src={FRONTIMG} alt='' className='absolute left-6  lg:w-40 lg:top-10 md:left-10  top-4 w-48 md:w-40' />
          <div className='absolute bottom-2 left-6 md:left-10 text-center'>
            <p className='font-bold text-lg md:text-xl'>Mujhiz_crEAtiVO</p>
            <p className='pb-2 md:pb-4'>UI Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dreamjobs;








