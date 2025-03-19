

import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

function Preview() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const userId = "67c4298db3b240dbedc7349c"; // Replace with actual userId or dynamically get it

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/personal-info", { 
          params: { userId }, // Pass userId as query parameter
          withCredentials: true, // Include credentials if needed for session-based auth
        });

        setPersonalInfo(response.data);
      } catch (error) {
        console.error("Error fetching personal info:", error);
      }
    };

    fetchPersonalInfo();
  }, [userId]);

  const handleDownload = () => {
    if (personalInfo) {
      const doc = new jsPDF();
      
      // Add the Resume Title
      doc.setFontSize(18);
      doc.text("Resume", 105, 20, null, null, "center");

      // Add the Name
      doc.setFontSize(14);
      doc.text(`${personalInfo.Firstname} ${personalInfo.LastName}`, 105, 30, null, null, "center");

      // Add the Profession
      doc.setFontSize(12);
      doc.text(personalInfo.Profession, 105, 40, null, null, "center");

      // Add Contact Information
      doc.text(`Address: ${personalInfo.Address}, ${personalInfo.City}, ${personalInfo.State} - ${personalInfo.ZipCode}`, 10, 60);

      // Save the PDF
      doc.save("resume.pdf");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Resume</h1>
        {personalInfo ? (
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold text-white">
                {personalInfo.Firstname.charAt(0)}{personalInfo.LastName.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{personalInfo.Firstname} {personalInfo.LastName}</h2>
                <p className="text-lg text-gray-600">{personalInfo.Profession}</p>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-700"><strong>Address:</strong> {personalInfo.Address}, {personalInfo.City}, {personalInfo.State} - {personalInfo.ZipCode}</p>
            </div>
            <button 
              onClick={handleDownload} 
              className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
            >
              Download as PDF
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Preview;
