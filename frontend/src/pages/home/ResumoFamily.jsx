

// import React from 'react';
// import JOINIMG from '../../assets/joinimg.png';
// import { FOOTERITEMS, FORMROUTES } from '../../constant';
// import { Link } from 'react-router-dom';


// function ResumoFamily() {
//   return (
//     <div className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 mt-40">
//       {/* Background Shape */}
//       <div className="absolute inset-0 h-60 bg-pink-200 top-52 w-full z-0"></div>
      
//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col gap-y-6 lg:gap-y-10 text-center lg:text-left w-full lg:w-1/2">
//         <p className="text-4xl lg:text-6xl font-bold">Join the 2000+ <br /> Resumo family</p>
//         <p className="text-lg lg:text-3xl  w-full lg:w-[60%]">
//           Fames ac turpis egestas sed. Sagittis vitae et leo duis. Duis at consectetur lorem donec massa.
//         </p>
//         <Link to={FORMROUTES.PERSONALINFORMATION} >
//         <button className="  cursor-pointer hover:bg-violet-950 w-60 py-4 rounded-2xl bg-violet-600 text-white self-center lg:self-start">
//           Create Resume for free
//         </button>
//         </Link>
//       </div>
      
//       {/* Image Section */}
//       <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end">
//         <img src={JOINIMG} alt="Join the Resumo family" className="max-w-full h-auto" />
//       </div>
//     </div>
    


//   );
// }

// export default ResumoFamily;
















import React from "react";
import JOINIMG from "../../assets/joinimg.png";
import { FORMROUTES } from "../../constant";
import { Link } from "react-router-dom";

function ResumoFamily() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 mt-20 md:mt-40">
      
      {/* Background Shape */}
      <div className="absolute inset-0 h-48 md:h-60 bg-pink-200 top-1/2 md:top-52 w-full z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-y-6 text-center lg:text-left w-full lg:w-1/2">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
          Join the 2000+ <br className="hidden md:block" /> Resumo family
        </p>
        <p className="text-lg md:text-xl lg:text-2xl w-full lg:w-[70%] mx-auto lg:mx-0">
          Fames ac turpis egestas sed. Sagittis vitae et leo duis. Duis at consectetur lorem donec massa.
        </p>
        <Link to={FORMROUTES.PERSONALINFORMATION}>
          <button className="cursor-pointer hover:bg-violet-950 w-48 md:w-60 py-3 md:py-4 rounded-2xl bg-violet-600 text-white self-center lg:self-start text-lg md:text-xl">
            Create Resume for Free
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <img src={JOINIMG} alt="Join the Resumo family" className="max-w-xs md:max-w-md lg:max-w-lg h-auto" />
      </div>

    </div>
  );
}

export default ResumoFamily;
