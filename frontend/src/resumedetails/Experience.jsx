
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FORMROUTES } from '../constant';
import Sidebar from '../component/Sidebar';

const countryStateOptions = {
  India: ['Delhi', 'Maharashtra', 'Karnataka'],
  USA: ['California', 'New York', 'Texas'],
  UK: ['London', 'Manchester', 'Birmingham'],
};

function Experience() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    Institute: '',
    Course: '',
    Country: '',
    State: '',
    Start: '',
    Finish: ''
  });
  const [store, setStore] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    if (name === 'Country') {
      setInput({ ...input, State: '', Country: value });
    }
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

  const handleAddDetails = () => {
    if (validateForm()) {
      setStore([...store, input]);
      setInput({ Institute: '', Course: '', Country: '', State: '', Start: '', Finish: '' });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 fixed h-full bg-gray-100 p-4 shadow-lg hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-auto w-full p-6 md:ml-30 lg:ml-0  overflow-auto md:flex md:flex-col  items-center md:items-end">
        <div className="bg-white rounded-2xl px-6 py-8 w-full md:w-2/3">
          <div className="flex justify-between mb-6">
            <p className="text-2xl font-bold">Experience</p>
            <p className="text-sky-400 text-xl">Add Info</p>
          </div>

          {/* Form Inputs */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:w-full w-full md:w-full">
            {['Institute', 'Course'].map((field) => (
              <div key={field} className="w-full ">
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

            {/* Country Dropdown */}
            <div className="w-full">
              <label className="text-2xl">Country</label>
              <select
                name="Country"
                value={input.Country}
                onChange={handleChange}
                className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
              >
                <option value="">Select Country</option>
                {Object.keys(countryStateOptions).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.Country && <p className="text-red-500 text-sm">{errors.Country}</p>}
            </div>

            {/* State Dropdown */}
            <div className="w-full">
              <label className="text-2xl">State</label>
              <select
                name="State"
                value={input.State}
                onChange={handleChange}
                className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2 lg:text-xl"
                disabled={!input.Country}
              >
                <option value="">Select State</option>
                {input.Country && countryStateOptions[input.Country]?.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.State && <p className="text-red-500 text-sm">{errors.State}</p>}
            </div>

            {/* Start Date Picker */}
            <div className="w-full">
              <label className="text-2xl">Start Date</label>
              <input
                type="date"
                name="Start"
                value={input.Start}
                onChange={handleChange}
                className="w-full h-12 rounded-xl px-4 bg-gray-100 mt-2  lg:text-xl"
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
              AddDetails
            </button>

            <Link to={FORMROUTES.CONTACTINFORMATION} className="w-full md:w-auto">
              <button className="bg-violet-700 md:text-sm lg:text-lg text-white cursor-pointer rounded-lg px-6 py-3 text-lg hover:bg-violet-900 w-full md:w-auto">
                NextSession
              </button>
            </Link>
          </div>





         {/* Display Stored Data */}
         <div className="mt-10 ">
            <h2 className="text-xl font-bold">Stored Experiences:</h2>
            {store.length > 0 ? (
              <ul className="mt-2">
                {store.map((item, index) => (
                  <li key={index} className="border p-2 rounded-lg mt-2">
                    <p><strong>Institute:</strong> {item.Institute}</p>
                    <p><strong>Course:</strong> {item.Course}</p>
                    <p><strong>Country:</strong> {item.Country}</p>
                    <p><strong>State:</strong> {item.State}</p>
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









