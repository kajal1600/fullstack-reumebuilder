
// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import PERSONALINFO from "../assets/Personal.png";
// import education from "../assets/Educationimg.png";
// import experience from "../assets/Experienceimg.png";
// import contact from "../assets/Contact.png";
// import award from "../assets/Awardimg.png";

// const data = [
//   { id: 1, img: PERSONALINFO, placeholder: "Personal Information", route: "/personalinformation" },
//   { id: 2, img: education, placeholder: "Education", route: "/education" },
//   { id: 3, img: experience, placeholder: "Experience", route: "/experience" },
//   { id: 4, img: contact, placeholder: "Contact Information", route: "/contactinformation" },
//   { id: 5, img: award, placeholder: "Award/Certification", route: "/award" },
// ];

// function Sidebar() {
//   const location = useLocation(); // Get the current route

//   return (
//     <div className="w-80 h-screen bg-gray-100 p-4 shadow-md">
//       {data.map((item) => {
//         const isActive = location.pathname === item.route;

//         return (
//           <NavLink
//             key={item.id}
//             to={item.route}
//             end
//             className={`flex items-center p-2 mb-4 cursor-pointer rounded-lg transition duration-200 ${
//               isActive ? "bg-violet-700 text-white font-bold" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
//             }`}
//           >
//             <img
//               src={item.img}
//               alt=""
//               className={`w-8 h-8 mr-3 transition duration-200 ${
//                 isActive ? "brightness-75" : "brightness-100"
//               }`}
//             />
//             <span className="text-xl">{item.placeholder}</span>
//           </NavLink>
//         );
//       })}
//     </div>
//   );
// }

// export default Sidebar;





















import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PERSONALINFO from "../assets/Personal.png";
import education from "../assets/Educationimg.png";
import experience from "../assets/Experienceimg.png";
import contact from "../assets/Contact.png";
import award from "../assets/Awardimg.png";

const data = [
  { id: 1, img: PERSONALINFO, placeholder: "Personal Information", route: "/personalinformation" },
  { id: 2, img: education, placeholder: "Education", route: "/education" },
  { id: 3, img: experience, placeholder: "Experience", route: "/experience" },
  { id: 4, img: contact, placeholder: "Contact Information", route: "/contactinformation" },
  { id: 5, img: award, placeholder: "Award/Certification", route: "/award" },
];

function Sidebar() {
  const location = useLocation();
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-80 h-screen bg-gray-100 p-4 shadow-md">
      {data.map((item) => {
        // Prevent /personalinformation from being active by default on small screens
        const isActive = location.pathname === item.route && (!isMediumScreen || item.route !== "/personalinformation");

        return (
          <NavLink
            key={item.id}
            to={item.route}
            end
            className={`flex items-center p-2 mb-4 cursor-pointer rounded-lg transition duration-200 ${
              isActive ? "bg-violet-700 text-white font-bold" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            <img
              src={item.img}
              alt=""
              className={`w-8 h-8 mr-3 transition duration-200 ${
                isActive ? "brightness-75" : "brightness-100"
              }`}
            />
            <span className="text-xl">{item.placeholder}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Sidebar;
