
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FORMROUTES } from '../constant';
import Sidebar from '../component/Sidebar';

const countryStateOptions = {
  India: ['Delhi', 'Maharashtra', 'Karnataka'],
  USA: ['California', 'New York', 'Texas'],
  UK: ['London', 'Manchester', 'Birmingham'],
};

function Education() {
  const navigate = useNavigate();

  const [input, Setinput] = useState({
    Institute: '',
    Course: '',
    Country: '',
    State: '',
    Start: '',
    Finish: '',
  });

  const [store, Setstore] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setinput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when typing
  };

  const validateForm = () => {
    let newErrors = {};

    if (!input.Institute.trim()) newErrors.Institute = 'Institution Name is required';
    if (!input.Course.trim()) newErrors.Course = 'Course Name is required';
    if (!input.Country.trim()) newErrors.Country = 'Country Name is required';
    if (!input.State.trim()) newErrors.State = 'State Name is required';
    if (!input.Start.trim()) {
      newErrors.Start = 'Start Year is required';
    } 

    if (!input.Finish.trim()) {
      newErrors.Finish = 'Finish Year is required';
    } 
   
    else if (parseInt(input.Start) > parseInt(input.Finish)) {
      newErrors.Finish = 'Finish Year must be greater than Start Year';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddDetails = () => {
    if (validateForm()) {
      Setstore([...store, input]);
      Setinput({
        Institute: '',
        Course: '',
        Country: '',
        State: '',
        Start: '',
        Finish: '',
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 fixed h-full bg-gray-100 p-6  hidden md:block">
        <Sidebar />
      </div>


      {/* Main Content */}
      <div className="w-3/4 p-6 overflow-auto md:ml-80   ">
        <div className="bg-white rounded-2xl shadow-lg p-10 lg:ml-30 ">
          <div className="flex justify-between items-center mb-6">
            <p className="text-3xl font-semibold text-gray-800">Education</p>
            <p className="text-sky-500 text-lg font-medium cursor-pointer hover:underline">Add Info</p>
          </div>

          {/* Input Fields */}
          <div className="lg:grid lg:grid-cols-2 md:flex   w-full md:w-full gap-6 md:flex-col ">
            <div>
              <label className="block text-lg font-medium text-gray-700">Institution Name</label>
              <input
                type="text"
                name="Institute"
                value={input.Institute}
                onChange={handleChange}
                placeholder="Institution Name"
                className="w-full h-12 mt-2 px-4 text-xl rounded-lg bg-gray-100"
              />
              {errors.Institute && <p className="text-red-500 text-sm mt-1">{errors.Institute}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Course</label>
              <input
                type="text"
                name="Course"
                value={input.Course}
                onChange={handleChange}
                placeholder="Course Name"
                className="w-full h-12 mt-2 px-4 text-xl rounded-lg bg-gray-100"
              />
              {errors.Course && <p className="text-red-500 text-sm mt-1">{errors.Course}</p>}
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col gap-6 mt-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Country</label>
              <select
                name="Country"
                value={input.Country}
                onChange={handleChange}
                className="w-full h-12 mt-2 px-4 text-xl rounded-lg bg-gray-100"
              >
                <option value="">Select Country</option>
                {Object.keys(countryStateOptions).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.Country && <p className="text-red-500 text-sm mt-1">{errors.Country}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">State</label>
              <select
                name="State"
                value={input.State}
                onChange={handleChange}
                className="w-full h-12 mt-2 px-4 text-xl rounded-lg bg-gray-100"
                disabled={!input.Country} // Disable if no country selected
              >
                <option value="">Select State</option>
                {input.Country &&
                  countryStateOptions[input.Country]?.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </select>
              {errors.State && <p className="text-red-500 text-sm mt-1">{errors.State}</p>}
            </div>
          </div>

          {/* Time Period */}
          <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col  gap-6 mt-6">
            <div>
              <label className="block text-lg font-medium text-gray-700">Start Year</label>
              <input
                type="date"
                name="Start"
                value={input.Start}
                onChange={handleChange}
                className="w-full h-12 mt-2 px-4 text-xl rounded-lg bg-gray-100"
              />
              {errors.Start && <p className="text-red-500 text-sm mt-1">{errors.Start}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Finish Year</label>
              <input
                type="date"
                name="Finish"
                value={input.Finish}
                onChange={handleChange}
                className="w-full h-12 mt-2 px-4 text-xl rounded-lg bg-gray-100"
              />
              {errors.Finish && <p className="text-red-500 text-sm mt-1">{errors.Finish}</p>}
            </div>
          </div>

         {/* Buttons */}
<div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
  <button
    onClick={() => navigate(FORMROUTES.PERSONALINFORMATION)}
    className="bg-gray-600 text-white lg:text-lg md:px-5 md:text-sm cursor-pointer rounded-lg px-6 py-3 text-lg hover:bg-gray-800 w-full md:w-auto"
  >
    Previous
  </button>

  <button
    onClick={handleAddDetails}
    className="bg-green-600 text-white lg:text-lg rounded-lg cursor-pointer md:px-5 md:text-sm px-6 py-3 text-lg hover:bg-green-800 w-full md:w-auto"
  >
    AddDetails
  </button>

  <Link to={FORMROUTES.EXPEREINCE} className="w-full md:w-auto">
    <button className="bg-violet-700 text-white lg:text-lg cursor-pointer md:px-5 md:text-sm rounded-lg px-6 py-3 text-lg hover:bg-violet-900 w-full md:w-auto">
      NextSession
    </button>
  </Link>
</div>


          {/* Stored Education Data */}
          <div className="mt-10">
            <h1 className="text-2xl font-semibold text-gray-800">Education Data</h1>
            <ul className="mt-4">
              {store.map((item, index) => (
                <li key={index} className="border-b py-4">
                  <p><strong>Institute:</strong> {item.Institute}</p>
                  <p><strong>Course:</strong> {item.Course}</p>
                  <p><strong>Location:</strong> {item.Country}, {item.State}</p>
                  <p><strong>Time Period:</strong> {item.Start} - {item.Finish}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

