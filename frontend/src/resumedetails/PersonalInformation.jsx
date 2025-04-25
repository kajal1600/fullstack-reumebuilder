

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FORMROUTES } from "../constant";
import Sidebar from "../component/Sidebar";
import BACKICON from '../assets/back.png';
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../redux/slices/personalInfoSlice";

function PersonalInformation() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.personalInfo);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ [name]: value }));
    setErrors({ ...errors, [name]: "" }); // Clear error when typing
  };

  const validateForm = () => {
    let newErrors = {};

    if (!input.Firstname.trim()) newErrors.Firstname = "First name is required";
    if (!input.LastName.trim()) newErrors.LastName = "Last name is required";
    if (!input.Profession.trim()) newErrors.Profession = "Profession is required";
    if (!input.Address.trim()) newErrors.Address = "Address is required";
    if (!input.City.trim()) newErrors.City = "City is required";
    if (!input.State.trim()) newErrors.State = "State is required";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // const handleAddDetails = async () => {
  //   if (validateForm()) {
  //     try {
  //       // Add the userId to the request body
  //       const response = await fetch("http://localhost:5000/api/users/add-personal", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include", // Ensure cookies are sent for session-based auth
  //         body: JSON.stringify({
  //           personalInfo: input,  // Send the form data wrapped in personalInfo
  //         }),
  //       });
  
  //       if (!response.ok) {
  //         const errorText = await response.text();
  //         console.error("Error Response:", errorText);
  //         throw new Error(`Request failed: ${response.status}`);
  //       }
  
  //       alert("Personal information added successfully!");
  //     } catch (error) {
  //       console.error("Error:", error.message);
  //       alert("Failed to submit personal information.");
  //     }
  //   }
  // };
  
  
  
  
  
  // Replace with dynamic userId

const handleAddDetails = async () => {
  if (validateForm()) {
    try {
      
  const userId = "67f232eac0dac7307b299183"; 
  const response = await fetch(`http://localhost:5000/api/users/add-personal?userId=${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensures session-based authentication
        body: JSON.stringify({
          personalInfo: input, // Send only personalInfo data
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error Response:", errorText);
        throw new Error(`Request failed: ${response.status}`);
      }

      alert("Personal information added successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to submit personal information.");
    }
  }
};


  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-lg w-full h-full px-10 py-6">
          <div className="flex justify-between items-center mt-4">
            <p className="text-2xl font-bold">Personal Information</p>
          </div>

          {/* Personal Info Form */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "First Name", name: "Firstname" },
              { label: "Last Name", name: "LastName" },
              { label: "Profession", name: "Profession" },
              { label: "Address", name: "Address" },
              { label: "City", name: "City" },
              { label: "State", name: "State" },
              { label: "Zip Code", name: "ZipCode" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label htmlFor={name} className="text-xl">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={input[name] || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 rounded-lg bg-gray-100 text-lg"
                />
                {errors[name] && <p className="text-red-500">{errors[name]}</p>}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Link to={FORMROUTES.HOME}>
              <img src={BACKICON} alt="Back" className="h-10 cursor-pointer w-10" />
            </Link>
            <button
              onClick={handleAddDetails}
              className="bg-green-600 hover:bg-green-800 px-8 py-3 rounded-lg text-white text-lg"
            >
              Add Details
            </button>
            <Link to={FORMROUTES.EDUCATION}>
              <button className="bg-violet-700 hover:bg-violet-900 px-10 py-3 rounded-lg text-white text-lg">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;



















