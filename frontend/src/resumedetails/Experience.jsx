// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FORMROUTES } from '../constant';
// import Sidebar from '../component/Sidebar';

// function Experience() {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     EmployerName: '',
//     Company: '',
//     Address: '',
//     Role: '',
//     Start: '',
//     Finish: ''
//   });
//   const [store, setStore] = useState([]);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     Object.keys(input).forEach((key) => {
//       if (!input[key]) {
//         newErrors[key] = 'This field is required';
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAddDetails = () => {
//     if (validateForm()) {
//       setStore([...store, input]);
//       setInput({ EmployerName: '', Company: '', Address: '', Role: '', Start: '', Finish: '' });
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 fixed h-full bg-gray-100 p-4 shadow-lg hidden md:block">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="ml-auto w-full p-6 md:ml-30 lg:ml-0 overflow-auto md:flex md:flex-col items-center md:items-end">
//         <div className="bg-white rounded-2xl px-6 py-8 w-full md:w-2/3">
//           <div className="flex justify-between mb-6">
//             <p className="text-2xl font-bold">Experience</p>
//             <p className="text-sky-400 text-xl">Add Info</p>
//           </div>

//           {/* Form Inputs */}
//           <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:w-full w-full md:w-full">
//             {['EmployerName', 'Company', 'Address', 'Role'].map((field) => (
//               <div key={field} className="w-full">
//                 <label className="text-2xl">{field}</label>
//                 <input
//                   type="text"
//                   name={field}
//                   value={input[field]}
//                   onChange={handleChange}
//                   placeholder={`Enter ${field}`}
//                   className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
//                 />
//                 {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
//               </div>
//             ))}

//             {/* Start Date Picker */}
//             <div className="w-full">
//               <label className="text-2xl">Start Date</label>
//               <input
//                 type="date"
//                 name="Start"
//                 value={input.Start}
//                 onChange={handleChange}
//                 className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
//               />
//               {errors.Start && <p className="text-red-500 text-sm">{errors.Start}</p>}
//             </div>

//             {/* Finish Date Picker */}
//             <div className="w-full">
//               <label className="text-2xl">Finish Date</label>
//               <input
//                 type="date"
//                 name="Finish"
//                 value={input.Finish}
//                 onChange={handleChange}
//                 className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
//               />
//               {errors.Finish && <p className="text-red-500 text-sm">{errors.Finish}</p>}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
//             <button
//               onClick={() => navigate(FORMROUTES.EDUCATION)}
//               className="bg-gray-600 text-white cursor-pointer rounded-lg px-6 py-3 text-lg hover:bg-gray-800 w-full md:w-auto"
//             >
//               Previous
//             </button>

//             <button
//               onClick={handleAddDetails}
//               className="bg-green-600 text-white rounded-lg cursor-pointer px-6 py-3 text-lg hover:bg-green-800 w-full md:w-auto"
//             >
//               Add Details
//             </button>

//             <Link to={FORMROUTES.CONTACTINFORMATION} className="w-full md:w-auto">
//               <button className="bg-violet-700 text-white cursor-pointer rounded-lg px-6 py-3 text-lg hover:bg-violet-900 w-full md:w-auto">
//                 Next Session
//               </button>
//             </Link>
//           </div>

//           {/* Display Stored Data */}
//           <div className="mt-10">
//             <h2 className="text-xl font-bold">Stored Experiences:</h2>
//             {store.length > 0 ? (
//               <ul className="mt-2">
//                 {store.map((item, index) => (
//                   <li key={index} className="border p-2 rounded-lg mt-2">
//                     <p><strong>Employer Name:</strong> {item.EmployerName}</p>
//                     <p><strong>Company:</strong> {item.Company}</p>
//                     <p><strong>Address:</strong> {item.Address}</p>
//                     <p><strong>Role:</strong> {item.Role}</p>
//                     <p><strong>Start Date:</strong> {item.Start}</p>
//                     <p><strong>Finish Date:</strong> {item.Finish}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No experiences added yet.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;

















import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FORMROUTES } from '../constant';
import Sidebar from '../component/Sidebar';

function Experience() {
  const navigate = useNavigate();
  const userId = "67c4298db3b240dbedc7349c"; // Replace with dynamic user ID if needed

  const [input, setInput] = useState({
    EmployerName: '',
    Company: '',
    Address: '',
    Role: '',
    Start: '',
    Finish: ''
  });

  const [store, setStore] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(input).forEach((key) => {
      if (!input[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleAddDetails = async () => {
    if (validateForm()) {
      try {
        const userId = "67f232eac0dac7307b299183"; // Same userId as personalInfo
  
        const response = await fetch(`http://localhost:5000/api/users/add-experience?userId=${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // For session-based authentication
          body: JSON.stringify({
            experience: input, // Sending experience data inside "experience"
          }),
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error Response:", errorText);
          throw new Error(`Request failed: ${response.status}`);
        }
  
        alert("Experience information added successfully!");
      } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to submit Experience information.");
      }
    }
  };
  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 fixed h-full bg-gray-100 p-4 shadow-lg hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-auto w-full p-6 md:ml-30 lg:ml-0 overflow-auto md:flex md:flex-col items-center md:items-end">
        <div className="bg-white rounded-2xl px-6 py-8 w-full md:w-2/3">
          <div className="flex justify-between mb-6">
            <p className="text-2xl font-bold">Experience</p>
            <p className="text-sky-400 text-xl">Add Info</p>
          </div>

          {/* Form Inputs */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:w-full w-full md:w-full">
            {['EmployerName', 'Company', 'Address', 'Role'].map((field) => (
              <div key={field} className="w-full">
                <label className="text-2xl">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={input[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field}`}
                  className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
                />
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}

            {/* Start Date Picker */}
            <div className="w-full">
              <label className="text-2xl">Start Date</label>
              <input
                type="date"
                name="Start"
                value={input.Start}
                onChange={handleChange}
                className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
              />
              {errors.Start && <p className="text-red-500 text-sm">{errors.Start}</p>}
            </div>

            {/* Finish Date Picker */}
            <div className="w-full">
              <label className="text-2xl">Finish Date</label>
              <input
                type="date"
                name="Finish"
                value={input.Finish}
                onChange={handleChange}
                className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
              />
              {errors.Finish && <p className="text-red-500 text-sm">{errors.Finish}</p>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => navigate(FORMROUTES.EDUCATION)}
              className="bg-gray-600 lg:text-lg md:text-sm text-white cursor-pointer rounded-lg px-6 py-3 text-lg hover:bg-gray-800 w-full md:w-auto"
            >
              Previous
            </button>

            <button
              onClick={handleAddDetails}
              className="bg-green-600 md:text-sm text-white lg:text-lg rounded-lg cursor-pointer px-6 py-3 text-lg hover:bg-green-800 w-full md:w-auto"
            >
              Add Details
            </button>

            <Link to={FORMROUTES.CONTACTINFORMATION} className="w-full md:w-auto">
              <button className="bg-violet-700 md:text-sm lg:text-lg text-white cursor-pointer rounded-lg px-6 py-3 text-lg hover:bg-violet-900 w-full md:w-auto">
                Next Session
              </button>
            </Link>
          </div>

          {/* Display Stored Experience Data */}
          <div className="mt-10">
            <h2 className="text-xl font-bold">Stored Experiences:</h2>
            {store.length > 0 ? (
              <ul className="mt-2">
                {store.map((item, index) => (
                  <li key={index} className="border p-2 rounded-lg mt-2">
                    <p><strong>Employer Name:</strong> {item.EmployerName}</p>
                    <p><strong>Company:</strong> {item.Company}</p>
                    <p><strong>Address:</strong> {item.Address}</p>
                    <p><strong>Role:</strong> {item.Role}</p>
                    <p><strong>Start Date:</strong> {item.Start}</p>
                    <p><strong>Finish Date:</strong> {item.Finish}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No experiences added yet.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
