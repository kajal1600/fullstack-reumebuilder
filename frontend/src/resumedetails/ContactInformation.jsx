



import React, { useState } from 'react';
import Flagimage from '../assets/flagimg.png';
import { FORMROUTES } from '../constant';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../component/Sidebar';

function ContactInformation() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        Email: '',
        PhoneNumber: '',
        Linkedin: '',
        Twitter: '',
        Instagram: '',
        Portfolio: '',
        Github: ''
    });
    const [errors, setErrors] = useState({});
    const [store, setStore] = useState([]);
    
    const validateForm = () => {
        const errors = {};
        if (!input.Email) {
            errors.Email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.Email)) {
            errors.Email = 'Invalid email format';
        }

        if (!input.PhoneNumber) {
            errors.PhoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(input.PhoneNumber)) {
            errors.PhoneNumber = 'Phone number must be exactly 10 digits';
        }

        ['Linkedin', 'Twitter', 'Instagram', 'Portfolio', 'Github'].forEach(field => {
            if (!input[field].trim()) errors[field] = `${field} Profile is required`;
        });

        setErrors(errors);
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleAddDetails = () => {
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setStore([...store, input]);
            setInput({ Email: '', PhoneNumber: '', Linkedin: '', Twitter: '', Instagram: '', Portfolio: '', Github: '' });
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/4  md:relative fixed h-full bg-gray-100 p-4 shadow-lg z-10 transition-transform duration-300 transform md:translate-x-0 hidden md:block">
                <Sidebar />
            </div>

            <div className="bg-white rounded-b-2xl md:ml-30  w-full h-full px-4 md:px-10 lg:px-20 py-10 lg:ml-0">
                <div className="flex justify-between mb-6">
                    <p className="text-lg md:text-2xl font-bold">Contact Information</p>
                    <p className="text-sky-400 text-lg md:text-2xl">Add Info</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full md:w-1/2">
                        <label className="text-lg md:text-2xl">Email Address</label>
                        <input 
                            type="email" 
                            name="Email" 
                            value={input.Email} 
                            onChange={handleChange} 
                            placeholder="Email address" 
                            className="w-full h-14 mt-2 rounded-2xl px-4 text-lg bg-gray-100" 
                        />
                        {errors.Email && <p className="text-red-500 text-sm">{errors.Email}</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="text-lg md:text-2xl">Phone Number</label>
                        <div className="flex items-center gap-2">
                            <img src={Flagimage} alt="Flag" className="h-10 mt-2" />
                            <input 
                                type="tel" 
                                name="PhoneNumber" 
                                value={input.PhoneNumber} 
                                onChange={handleChange} 
                                placeholder="Phone number" 
                                className="w-full h-14 mt-2 rounded-2xl px-4 text-lg bg-gray-100" 
                            />
                        </div>
                        {errors.PhoneNumber && <p className="text-red-500 text-sm">{errors.PhoneNumber}</p>}
                    </div>
                </div>
                
                {['Linkedin', 'Twitter', 'Instagram', 'Portfolio', 'Github'].map((field) => (
                    <div key={field} className="mt-6">
                        <label className="text-lg md:text-2xl">{field} Profile Link</label>
                        <input 
                            type="text" 
                            name={field} 
                            value={input[field]} 
                            onChange={handleChange} 
                            placeholder={`${field} Profile Link`} 
                            className="w-full h-14 mt-2 rounded-2xl px-4 text-lg bg-gray-100" 
                        />
                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                    </div>
                ))}
                
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
                    <button
                        onClick={() => navigate(FORMROUTES.EXPEREINCE)}
                  className="bg-gray-700 text-white lg:text-lg cursor-pointer rounded-lg md:px-5 md:text-sm px-6 py-3 text-sm hover:bg-gray-900 w-full md:w-auto"
                    >
                        Previous
                    </button>

                    <button
                        onClick={handleAddDetails}
                       className="bg-green-700 text-white lg:text-lg cursor-pointer rounded-lg md:px-5 md:text-sm px-6 py-3 text-sm hover:bg-green-900 w-full md:w-auto"
                    >
                        Add Details
                    </button>

                    <Link to={FORMROUTES.AWARD} className="w-full md:w-auto">
                        <button className="bg-violet-700 text-white lg:text-lg cursor-pointer rounded-lg md:px-5 md:text-sm px-6 py-3 text-sm hover:bg-violet-900 w-full md:w-auto">
                            NextSession
                        </button>
                    </Link>
                </div>




  {/* Display Stored Data */}
  <div className="mt-10 ">
            <h2 className="text-xl font-bold">ContactInformatio Data:</h2>
            {store.length > 0 ? (
              <ul className="mt-2">
                {store.map((item, index) => (
                  <li key={index} className="border p-2 rounded-lg mt-2">
                    <p><strong>Email Address:</strong> {item.Email}</p>
                    <p><strong>Phoen No.:</strong> {item.PhoneNumber}</p>
                    <p><strong>Linkedin Profile:</strong> {item.Linkedin}</p>
                    <p><strong>Twitter:</strong> {item.Twitter}</p>
                    <p><strong>Instagram:</strong> {item.Instagram}</p>
                    <p><strong>Portfolio:</strong> {item.Portfolio}</p>
                    <p><strong>Github:</strong> {item.Github}</p>
               
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No information added yet.</p>
            )}
          </div>



       
            </div>
        </div>
    );
}

export default ContactInformation;
