import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or authentication data
    localStorage.removeItem('userToken'); // Example: Clearing token from local storage
    sessionStorage.clear(); // Clear session storage if used
    
    // Redirect to login page or homepage
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Are you sure you want to log out?</h2>
      <button 
        onClick={handleLogout} 
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-all"
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOut;