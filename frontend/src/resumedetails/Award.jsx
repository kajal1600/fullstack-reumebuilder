
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FORMROUTES } from '../constant';
import Sidebar from '../component/Sidebar';

function Award() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Organization: '',
    AwardTitle: '',
    Date: '',
    Description: ''
  });
  const [errors, setErrors] = useState({});
  const [store, setStore] = useState([]);

  const validateForm = () => {
    const errors = {};
    if (!input.Organization.trim()) {
      errors.Organization = 'Organization name is required';
    }
    if (!input.AwardTitle.trim()) {
      errors.AwardTitle = 'Award title is required';
    }
    if (!input.Date) {
      errors.Date = 'Date of acquisition is required';
    }
    if (!input.Description.trim()) {
      errors.Description = 'Description is required';
    } else if (input.Description.length > 60) {
      errors.Description = 'Description must be at most 60 characters';
    }
    setErrors(errors);
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Description' && value.length > 60) return;
    setInput({ ...input, [name]: value });
  };


  const handleAddDetails = async () => {
    if (validateForm()) {
      try {
        const userId = "67f232eac0dac7307b299183"; // Same userId as personalInfo
  
        const response = await fetch(`http://localhost:5000/api/users/add-award?userId=${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // For session-based authentication
          body: JSON.stringify({
            award: input, // Sending award data inside "award"
          }),
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error Response:", errorText);
          throw new Error(`Request failed: ${response.status}`);
        }
  
        alert("Award information added successfully!");
      } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to submit Award information.");
      }
    }
  };
  
  

  return (
    <div className="flex h-screen">
      <div className="w-1/4 fixed h-full bg-gray-100 p-4 shadow-lg hidden md:block">
        <Sidebar />
      </div>

      <div className="w-full h-full px-4 md:px-10 lg:px-20 md:ml-80 lg:ml-100 py-10">
        <div className="flex justify-between mb-6">
          <p className="text-lg md:text-2xl font-bold">Award/Certification</p>
          <p className="text-sky-400 text-lg md:text-2xl">Add Info</p>
        </div>

        <label className="text-lg md:text-2xl">Name of Organization</label>
        <input 
          type="text" 
          name='Organization'
          value={input.Organization}
          onChange={handleChange}
          placeholder="Organization’s name" 
          className="mt-2 w-full h-14 md:h-16 lg:h-20 rounded-2xl text-lg md:text-2xl bg-gray-100 px-4" 
        />
        {errors.Organization && <p className="text-red-500 text-sm">{errors.Organization}</p>}

        <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-6 md:mt-10">
          <div className="w-full md:w-1/2">
            <label className="text-lg md:text-2xl">Award Title</label>
            <input 
              type="text" 
              name='AwardTitle'
              value={input.AwardTitle}
              onChange={handleChange}
              placeholder="Award Title" 
              className="w-full bg-gray-100 h-14 md:h-16 lg:h-20 rounded-lg px-4 text-lg md:text-2xl" 
            />
            {errors.AwardTitle && <p className="text-red-500 text-sm">{errors.AwardTitle}</p>}
          </div>

          <div className="w-full md:w-1/2">
            <label className="text-lg md:text-2xl">Date of Acquisition</label>
            <input 
              type="date" 
              name='Date'
              value={input.Date}
              onChange={handleChange}
              className="w-full bg-gray-100 h-14 md:h-16 lg:h-20 rounded-lg px-4 text-lg md:text-2xl" 
            />
            {errors.Date && <p className="text-red-500 text-sm">{errors.Date}</p>}
          </div>
        </div>

        <div className="mt-6 md:mt-10">
          <p className="text-lg md:text-2xl font-bold">Description</p>
          <div className="relative">
            <textarea 
              name="Description" 
              value={input.Description}
              onChange={handleChange}
              className="w-full text-lg md:text-2xl min-h-32 md:h-40 bg-gray-100 px-4 py-2 rounded-lg"
              placeholder="Enter a description..."
            />
            <p className="text-violet-700 font-bold text-lg absolute bottom-2 right-4">{input.Description.length}/60</p>
            {errors.Description && <p className="text-red-500 text-sm">{errors.Description}</p>}
          
          </div>
          <p className='text-lg text-violet-600 font-bold'>only 60 characters can enter</p>
        </div>

        <div className='flex flex-col gap-y-10 md:flex md:flex-row justify-between mt-6'>
          <button onClick={() => navigate(-1)} className='bg-gray-400 lg:text-lg hover:bg-gray-600 cursor-pointer text-white md:text-sm md:px-3 rounded-xl px-6 py-3'>Previous</button>
          <button onClick={handleAddDetails} className='bg-green-600 lg:text-lg hover:bg-green-800 cursor-pointer text-white rounded-xl px-6 py-3'>Add Details</button>

          <Link to={FORMROUTES.PREVIEW} className="w-full md:w-auto">
            <button className='bg-violet-700 lg:text-lg hover:bg-violet-900 cursor-pointer text-white rounded-xl md:text-sm md:px-3 px-6 py-4 w-full md:w-auto'>
              Preview
            </button>
          </Link>
        </div>
        
        <div className="mt-10">
        <h1 className="text-xl md:text-2xl font-bold">Award/Certification Data</h1>
        <ul className="mt-4">
          {store.map((item, index) => (
            <li key={index} className="border-b py-4">
              <p><strong>Organization:</strong> {item.Organization}</p>
              <p><strong>Award Title:</strong> {item.AwardTitle || 'N/A'}</p>
              <p><strong>Date:</strong> {item.Date}</p>
              <p><strong>Description:</strong> {item.Description}</p>
            </li>
          ))}
        </ul>
      </div>

      </div>
    </div>
  );
}

export default Award;
