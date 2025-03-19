

// import React, { useState } from 'react';
// import { FOOTERITEMS, FORMROUTES } from '../constant';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='flex items-center justify-between px-20 py-4 bg-white shadow-md'>
//       {/* Logo */}
//       <Link to={FORMROUTES.HOME} className='text-3xl font-bold'>
//         Resum<span className='text-violet-800'>o</span>
//       </Link>

//       {/* Toggle Button for Small Screens */}
//       <button onClick={() => setIsOpen(!isOpen)}   className='sm:block md:hidden text-2xl hover:text-violet-800'>
//         {isOpen ? <FiX /> : <FiMenu />}
//       </button>

//       {/* Navigation Menu */}
//       <div className={`absolute md:static  top-16 left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent  ${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row  items-center md:justify-center`}>
//         <ul className='flex flex-col md:flex-row w-full md:w-auto xl:gap-x-50  md:text-2xl items-center gap-y-3 md:gap-x-10 py-4 md:py-0'>
//           <Link to={FORMROUTES.HOME} >
//           <li onClick={() => setIsOpen(false)} className='hover:text-violet-700 hover:font-bold cursor-pointer' >Home</li>
//           </Link>
//           <Link to={FOOTERITEMS.TEMPLATES} >
//           <li onClick={() => setIsOpen(false)} className='hover:text-violet-700 hover:font-bold cursor-pointer'>Template</li>
//           </Link>
//           <Link to={FORMROUTES.ABOUTUS} >
//           <li onClick={() => setIsOpen(false)} className='hover:text-violet-700 hover:font-bold cursor-pointer'>About</li>
//           </Link>
//           {/* Start Button inside the Toggle Menu for Small Screens */}
//           <li className='md:hidden'>
//             <Link to={FORMROUTES.PERSONALINFORMATION} onClick={() => setIsOpen(false)}>
//               <button className='px-6 py-2 text-xl hover:bg-violet-950 rounded-xl bg-violet-800 text-white'>Start</button>
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Start Button - Always Visible on Larger Screens */}
//       <div className='hidden md:flex md:ml-auto'>
//       <Link 
//   to={window.innerWidth < 768 ? FORMROUTES.SIDEBAR : FORMROUTES.PERSONALINFORMATION}  
//   onClick={() => setIsOpen(false)}
// >
//   <button className='px-6 py-2 text-xl hover:bg-violet-950 rounded-xl bg-violet-800 text-white'>Start</button>
// </Link>

//       </div>
//     </div>
//   );
// }

// export default Header;










// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Import icons for the toggle button

// function Header({ user, onLogout }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [photoMenuOpen, setPhotoMenuOpen] = useState(false); // Track photo menu toggle
//   const [preview, setPreview] = useState(
//     "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
//   );




//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const navigate = useNavigate();

//   // Fetch user data
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/user", { withCredentials: true })
//       .then((res) => {
//         console.log(res.data); // Log the response
//         setUser(res.data);
//         if (res.data.profilePic) {
//           setPreview(`http://localhost:5000
//             /api/uploads/${res.data.profilePic}`);
//         }
//       })
//       .catch(() => setUser(null));
//   }, []);
  

//   // Logout function
//   const handleLogout = () => {
//     axios
//       .post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
//       .then(() => navigate("/"))
//       .catch((err) => console.error(err));
//   };

//   // Profile picture upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file)); // Show preview before upload
//   };

//   const handleUpload = () => {
//     if (!image) return;

//     const formData = new FormData();
//     formData.append("profilePic", image);

//     axios
//       .post("http://localhost:5000/api/auth/uploads", formData, { withCredentials: true })
//       .then((res) => {
//         setPreview(`http://localhost:5000/api/auth/uploads/${res.data.profilePic}`);
//       })
//       .catch((err) => console.error(err));
//   };





//   // Handle Image Upload
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPreview(imageUrl);
//       setPhotoMenuOpen(false); // Close photo menu after selecting an image
//     }
//   };

//   return (
//     <div className="flex items-center justify-between px-4 py-4 text-4xl font-bold bg-white shadow-md">
//       {/* Logo */}
//       <p>Resum<span className="text-violet-800">o</span></p>

//       {/* Toggle Button (Visible on md and below) */}
//       <button 
//         className="md:hidden text-gray-700 focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={30} /> : <Menu size={30} />} {/* Open/Close Icon */}
//       </button>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-10 text-2xl">
//         <ul className="flex space-x-10">
//           <li className="hover:text-violet-700 hover:font-bold cursor-pointer">Home</li>
//           <li className="hover:text-violet-700 hover:font-bold cursor-pointer">Template</li>
//           <li className="hover:text-violet-700 hover:font-bold cursor-pointer">About</li>
//         </ul>
//       </div>

//       {/* Right Section - User Info (Desktop) */}
//       <div className="hidden md:flex items-center space-x-6">
//         {user && <span className="text-2xl font-bold text-gray-700">{user.name}</span>}
//         <div className="relative">
//           <img
//             src={preview}
//             className="w-10 h-10 rounded-full cursor-pointer"
//             onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
//           />
//           {photoMenuOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
//               <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm">
//                 Choose a photo
//                 <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
//               </label>
//             </div>
//           )}
//         </div>
//         <button
//           onClick={onLogout}
//           className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
//           {/* Profile Picture First */}
//           <div className="relative flex flex-col items-center">
//             <img
//               src={preview}
//               className="w-16 h-16 rounded-full cursor-pointer"
//               onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
//             />
//             {photoMenuOpen && (
//               <div className="mt-2 w-40 bg-white shadow-lg rounded-lg p-2 text-center">
//                 {user && <span className="block text-xl font-bold text-gray-700">{user.name}</span>}
//                 <label className="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 text-xl">
//                   Choose a photo
//                   <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
//                 </label>
//               </div>
//             )}
//           </div>
//           {/* Menu Items */}
//           <ul className="flex flex-col items-center text-xl space-y-4">
//             <li className="hover:text-violet-700 hover:font-bold cursor-pointer">Home</li>
//             <li className="hover:text-violet-700 hover:font-bold cursor-pointer">Template</li>
//             <li className="hover:text-violet-700 hover:font-bold cursor-pointer">About</li>
//           </ul>
//           {/* Logout Button */}
//           <button
//             onClick={onLogout}
//             className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;

















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Menu, X } from "lucide-react"; // Import icons

// import { FOOTERITEMS ,FORMROUTES} from "../constant";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [photoMenuOpen, setPhotoMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(
//     "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
//   );

//   const navigate = useNavigate();

//   // Fetch user data after login
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/user", { withCredentials: true })
//       .then((res) => {
//         setUser(res.data);
//         if (res.data.profilePic) {
//           setPreview(`http://localhost:5000/api/uploads/${res.data.profilePic}`);
//         }
//       })
//       .catch(() => setUser(null));
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     axios
//       .post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
//       .then(() => {
//         setUser(null);
//         navigate("/");
//       })
//       .catch((err) => console.error(err));
//   };

//   // Handle profile image selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//       setPhotoMenuOpen(false); // Close the photo menu
//     }
//   };

//   // Upload profile image
//   const handleUpload = () => {
//     if (!image) return;

//     const formData = new FormData();
//     formData.append("profilePic", image);

//     axios
//       .post("http://localhost:5000/api/auth/uploads", formData, { withCredentials: true })
//       .then((res) => {
//         setPreview(`http://localhost:5000/api/uploads/${res.data.profilePic}`);
//       })
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div className="flex items-center justify-between px-4 py-4 text-4xl font-bold bg-white shadow-md">
//       {/* Logo */}
//       <p>
//         Resum<span className="text-violet-800">o</span>
//       </p>

//       {/* Toggle Button (Visible on md and below) */}
//       <button
//         className="md:hidden text-gray-700 focus:outline-none"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={30} /> : <Menu size={30} />}
//       </button>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center space-x-10 text-2xl">
//         <ul className="flex space-x-10">
//           <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
//           onClick={() => navigate(FORMROUTES.HOME)}
//           >Home</li>
//           <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
//             onClick={() => navigate(FOOTERITEMS.TEMPLATES)}
//           >Template</li>
//           <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
//             onClick={() => navigate(FOOTERITEMS.ABOUTUSFOOTER)}
//           >About</li>
//         </ul>
//       </div>

//       {/* Right Section - User Info (Desktop) */}
//       <div className="hidden md:flex items-center space-x-6">
//         {user && <span className="text-2xl font-bold text-gray-700">{user.name}</span>}
//         <div className="relative">
//           <img
//             src={preview}
//             className="w-10 h-10 rounded-full cursor-pointer"
//             onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
//           />
//           {photoMenuOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
//               <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm">
//                 Choose a photo
//                 <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
//               </label>
//               <button
//                 onClick={handleUpload}
//                 className="w-full mt-2 px-4 py-2 bg-violet-700 text-white rounded-md"
//               >
//                 Upload
//               </button>
//             </div>
//           )}
//         </div>
//         <button
//           onClick={handleLogout}
//           className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
//           {/* Profile Picture First */}
//           <div className="relative flex flex-col items-center">
//             <img
//               src={preview}
//               className="w-16 h-16 rounded-full cursor-pointer"
//               onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
//             />
//             {photoMenuOpen && (
//               <div className="mt-2 w-40 bg-white shadow-lg rounded-lg p-2 text-center">
//                 {user && <span className="block text-xl font-bold text-gray-700">{user.name}</span>}
//                 <label className="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 text-xl">
//                   Choose a photo
//                   <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
//                 </label>
//                 <button
//                   onClick={handleUpload}
//                   className="w-full mt-2 px-4 py-2 bg-violet-700 text-white rounded-md"
//                 >
//                   Upload
//                 </button>
//               </div>
//             )}
//           </div>
//           {/* Menu Items */}
//           <ul className="flex flex-col items-center text-xl space-y-4">

//             <li className="hover:text-violet-700 hover:font-bold cursor-pointer">Home</li>
       
     
//             <li className="hover:text-violet-700 hover:font-bold cursor-pointer">Template</li>
          
//             <li className="hover:text-violet-700 hover:font-bold cursor-pointer">About</li>
        
//           </ul>
//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Menu, X } from "lucide-react"; // Import icons
import { FOOTERITEMS, FORMROUTES } from "../constant";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoMenuOpen, setPhotoMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  );

  const navigate = useNavigate();

  // Fetch user data after login
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        if (res.data.profilePic) {
          setPreview(`http://localhost:5000/api/uploads/${res.data.profilePic}`);
        }
      })
      .catch(() => setUser(null));
  }, []);

  // Logout function
  const handleLogout = () => {
    axios
      .post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  // Handle profile image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPhotoMenuOpen(false); // Close the photo menu
    }
  };

  // Upload profile image
  const handleUpload = () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("profilePic", image);

    axios
      .post("http://localhost:5000/api/auth/uploads", formData, { withCredentials: true })
      .then((res) => {
        setPreview(`http://localhost:5000/api/uploads/${res.data.profilePic}`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex items-center justify-between px-4 py-4 text-4xl font-bold bg-white shadow-md">
      {/* Logo */}
      <p>
        Resum<span className="text-violet-800">o</span>
      </p>

      {/* Toggle Button (Visible on md and below) */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10 text-2xl">
        <ul className="flex space-x-10">
          <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
            onClick={() => navigate(FORMROUTES.HOME)}
          >
            Home
          </li>
          <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
            onClick={() => navigate(FOOTERITEMS.TEMPLATES)}
          >
            Template
          </li>
          <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
            onClick={() => navigate(FOOTERITEMS.ABOUTUSFOOTER)}
          >
            About
          </li>
        </ul>
      </div>

      {/* Right Section - User Info (Desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        {user && <span className="text-2xl font-bold text-gray-700">{user.name}</span>}
        <div className="relative">
          <img
            src={preview}
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
          />
          {photoMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
              {user && <span className="block text-xl font-bold text-gray-700">{user.name}</span>}
              <label className="block px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm">
                Choose a photo
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
              <button
                onClick={handleUpload}
                className="w-full mt-2 px-4 py-2 bg-violet-700 text-white rounded-md"
              >
                Upload
              </button>
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
          {/* Profile Picture First */}
          <div className="relative flex flex-col items-center">
            <img
              src={preview}
              className="w-16 h-16 rounded-full cursor-pointer"
              onClick={() => setPhotoMenuOpen(!photoMenuOpen)}
            />
            {photoMenuOpen && (
              <div className="mt-2 w-40 bg-white shadow-lg rounded-lg p-2 text-center">
                {user && <span className="block text-xl font-bold text-gray-700">{user.name}</span>}
                <label className="block px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 text-xl">
                  Choose a photo
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
                <button
                  onClick={handleUpload}
                  className=" mt-2 px-2 py-1 bg-violet-700 text-white rounded-md"
                >
                  Upload
                </button>
              </div>
            )}
          </div>
          {/* Menu Items */}
          <ul className="flex flex-col items-center text-xl space-y-4">
            <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
              onClick={() => navigate(FORMROUTES.HOME)}
            >
              Home
            </li>
            <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
              onClick={() => navigate(FOOTERITEMS.TEMPLATES)}
            >
              Template
            </li>
            <li className="hover:text-violet-700 hover:font-bold cursor-pointer"
              onClick={() => navigate(FOOTERITEMS.ABOUTUSFOOTER)}
            >
              About
            </li>
          </ul>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-xl hover:bg-red-700 rounded-xl bg-red-600 text-white"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
