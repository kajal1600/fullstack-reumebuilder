

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Preview() {
//   const userId = '67f232eac0dac7307b299183';

//   const [personalInfo, setPersonalInfo] = useState(null);
//   const [contactInformation, setContactInformation] = useState(null);
//   const [educationData, setEducationData] = useState([]);
//   const [experienceData, setExperienceData] = useState([]);
//   const [awardsData, setAwardsData] = useState([]);

//   useEffect(() => {
//     const fetchPersonalInfo = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/personal-info?userId=${userId}`);
//         setPersonalInfo(response.data);
//       } catch (error) {
//         console.error("Error fetching personal info:", error);
//       }
//     };

//     const fetchContactInformation = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/contact-information?userId=${userId}`);
//         setContactInformation(response.data);
//       } catch (error) {
//         console.error("Error fetching contact information:", error);
//       }
//     };

//     const fetchEducationData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/education-info?userId=${userId}`);
//         setEducationData(response.data.education || []);
//       } catch (error) {
//         console.error("Error fetching education data:", error);
//       }
//     };

//     const fetchExperienceData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/experience-info?userId=${userId}`);
//         setExperienceData(response.data.experience || []);
//       } catch (error) {
//         console.error("Error fetching experience data:", error);
//       }
//     };

//     const fetchAwardsData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/users/awards-info?userId=${userId}`);
//         setAwardsData(response.data.awards || []);
//       } catch (error) {
//         console.error("Error fetching awards data:", error);
//       }
//     };

//     fetchPersonalInfo();
//     fetchContactInformation();
//     fetchEducationData();
//     fetchExperienceData();
//     fetchAwardsData();
//   }, []);

//   if (!personalInfo || !contactInformation) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{
//       width: "60%",
//       margin: "auto",
//       padding: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "10px",
//       background: "#fff",
//       boxShadow: "0 0 10px rgba(0,0,0,0.1)"
//     }}>
//       <h1 style={{ textAlign: "center", color: "#333", textTransform: "uppercase" }}>Resume</h1>

//       {/* Personal Info */}
//       <section style={{ marginBottom: "20px", padding: "10px", borderBottom: "2px solid #ddd" }}>
//         <h2 style={{ color: "#444", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Personal Information</h2>
//         <p><strong>Name:</strong> {personalInfo.Firstname} {personalInfo.LastName}</p>
//         <p><strong>Profession:</strong> {personalInfo.Profession}</p>
//         <p><strong>Address:</strong> {personalInfo.Address}, {personalInfo.City}, {personalInfo.State} - {personalInfo.ZipCode}</p>
//       </section>

//       {/* Contact Info */}
//       <section style={{ marginBottom: "20px", padding: "10px", borderBottom: "2px solid #ddd" }}>
//         <h2 style={{ color: "#444", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Contact Information</h2>
//         <p><strong>PhoneNumber:</strong> {contactInformation.PhoneNumber}</p>
//         <p><strong>Email:</strong> {contactInformation.Email}</p>
//         <p><strong>Linkedin:</strong> {contactInformation.Linkedin}</p>
//         <p><strong>GitHub:</strong> {contactInformation.Github}</p>
//         <p><strong>Portfolio:</strong> {contactInformation.Portfolio}</p>
//         <p><strong>Twitter:</strong> {contactInformation.Twitter}</p>
//         <p><strong>Instagram:</strong> {contactInformation.Instagram}</p>
//       </section>

//       {/* Education Info */}
//       <section style={{ marginBottom: "20px", padding: "10px", borderBottom: "2px solid #ddd" }}>
//         <h2 style={{ color: "#444", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Education</h2>
//         {educationData.length === 0 ? (
//           <p>No education data available.</p>
//         ) : (
//           educationData.map((edu, index) => (
//             <div key={index} style={{ marginBottom: "15px" }}>
//               <p><strong>Institute:</strong> {edu.Institute}</p>
//               <p><strong>Course:</strong> {edu.Course}</p>
//               <p><strong>Location:</strong> {edu.State}, {edu.Country}</p>
//               <p><strong>Duration:</strong> {edu.Start} - {edu.Finish}</p>
//               <hr />
//             </div>
//           ))
//         )}
//       </section>

//       {/* Experience Info */}
//       <section style={{ marginBottom: "20px", padding: "10px", borderBottom: "2px solid #ddd" }}>
//         <h2 style={{ color: "#444", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Experience</h2>
//         {experienceData.length === 0 ? (
//           <p>No experience data available.</p>
//         ) : (
//           experienceData.map((exp, index) => (
//             <div key={index} style={{ marginBottom: "15px" }}>
//               <p><strong>Employer Name:</strong> {exp.EmployerName}</p>
//               <p><strong>Company:</strong> {exp.Company}</p>
//               <p><strong>Address:</strong> {exp.Address}</p>
//               <p><strong>Role:</strong> {exp.Role}</p>
//               <p><strong>Duration:</strong> {new Date(exp.Start).toLocaleDateString()} - {new Date(exp.Finish).toLocaleDateString()}</p>
//               <hr />
//             </div>
//           ))
//         )}
//       </section>

//       {/* Awards Info */}
//       <section style={{ marginBottom: "20px", padding: "10px", borderBottom: "2px solid #ddd" }}>
//         <h2 style={{ color: "#444", borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>Awards & Achievements</h2>
//         {awardsData.length === 0 ? (
//           <p>No awards data available.</p>
//         ) : (
//           awardsData.map((award, index) => (
//             <div key={index} style={{ marginBottom: "15px" }}>
//               <p><strong>Organization:</strong> {award.Organization}</p>
//               <p><strong>Award Title:</strong> {award.AwardTitle}</p>
//               <p><strong>Date:</strong> {new Date(award.Date).toLocaleDateString()}</p>
//               <p><strong>Description:</strong> {award.Description}</p>
//               <hr />
//             </div>
//           ))
//         )}
//       </section>
//     </div>
//   );
// }

// export default Preview;







// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// function Preview() {
//   const userId = "67f232eac0dac7307b299183";

//   const [personalInfo, setPersonalInfo] = useState(null);
//   const [contactInformation, setContactInformation] = useState(null);
//   const [educationData, setEducationData] = useState([]);
//   const [experienceData, setExperienceData] = useState([]);
//   const [awardsData, setAwardsData] = useState([]);

//   const resumeRef = useRef();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [personal, contact, education, experience, awards] = await Promise.all([
//           axios.get(`http://localhost:5000/api/users/personal-info?userId=${userId}`),
//           axios.get(`http://localhost:5000/api/users/contact-information?userId=${userId}`),
//           axios.get(`http://localhost:5000/api/users/education-info?userId=${userId}`),
//           axios.get(`http://localhost:5000/api/users/experience-info?userId=${userId}`),
//           axios.get(`http://localhost:5000/api/users/awards-info?userId=${userId}`),
//         ]);

//         setPersonalInfo(personal.data);
//         setContactInformation(contact.data);
//         setEducationData(education.data.education || []);
//         setExperienceData(experience.data.experience || []);
//         setAwardsData(awards.data.awards || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDownload = async () => {
//     const element = resumeRef.current;
//     const originalStyle = element.getAttribute("style") || "";

//     // Force fallback colors
//     element.setAttribute("style", `${originalStyle}; color: #000 !important; background-color: #fff !important;`);

//     try {
//       const canvas = await html2canvas(element, {
//         useCORS: true,
//         backgroundColor: "#fff",
//       });
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("resume.pdf");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     } finally {
//       element.setAttribute("style", originalStyle); // Restore style
//     }
//   };

//   if (!personalInfo || !contactInformation) {
//     return <div className="text-center text-gray-500 mt-10">Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center px-4 py-6">
//       <div
//         ref={resumeRef}
//         className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
//         style={{ color: "#000", backgroundColor: "#fff" }}
//       >
//         <h1 className="text-3xl font-bold text-center text-gray-800 uppercase">Resume</h1>

//         {/* Personal Info */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Personal Information</h2>
//           <p><strong>Name:</strong> {personalInfo.Firstname} {personalInfo.LastName}</p>
//           <p><strong>Profession:</strong> {personalInfo.Profession}</p>
//           <p><strong>Address:</strong> {personalInfo.Address}, {personalInfo.City}, {personalInfo.State} - {personalInfo.ZipCode}</p>
//         </section>

//         {/* Contact Info */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Contact Information</h2>
//           <p><strong>Phone:</strong> {contactInformation.PhoneNumber}</p>
//           <p><strong>Email:</strong> {contactInformation.Email}</p>
//           <p><strong>LinkedIn:</strong> {contactInformation.Linkedin}</p>
//           <p><strong>GitHub:</strong> {contactInformation.Github}</p>
//           <p><strong>Portfolio:</strong> {contactInformation.Portfolio}</p>
//           <p><strong>Twitter:</strong> {contactInformation.Twitter}</p>
//           <p><strong>Instagram:</strong> {contactInformation.Instagram}</p>
//         </section>

//         {/* Education Info */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Education</h2>
//           {educationData.length === 0 ? (
//             <p>No education data available.</p>
//           ) : (
//             educationData.map((edu, index) => (
//               <div key={index} className="mb-4">
//                 <p><strong>Institute:</strong> {edu.Institute}</p>
//                 <p><strong>Course:</strong> {edu.Course}</p>
//                 <p><strong>Location:</strong> {edu.State}, {edu.Country}</p>
//                 <p><strong>Duration:</strong> {edu.Start} - {edu.Finish}</p>
//               </div>
//             ))
//           )}
//         </section>

//         {/* Experience Info */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Experience</h2>
//           {experienceData.length === 0 ? (
//             <p>No experience data available.</p>
//           ) : (
//             experienceData.map((exp, index) => (
//               <div key={index} className="mb-4">
//                 <p><strong>Employer Name:</strong> {exp.EmployerName}</p>
//                 <p><strong>Company:</strong> {exp.Company}</p>
//                 <p><strong>Address:</strong> {exp.Address}</p>
//                 <p><strong>Role:</strong> {exp.Role}</p>
//                 <p><strong>Duration:</strong> {new Date(exp.Start).toLocaleDateString()} - {new Date(exp.Finish).toLocaleDateString()}</p>
//               </div>
//             ))
//           )}
//         </section>

//         {/* Awards Info */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Awards & Achievements</h2>
//           {awardsData.length === 0 ? (
//             <p>No awards data available.</p>
//           ) : (
//             awardsData.map((award, index) => (
//               <div key={index} className="mb-4">
//                 <p><strong>Organization:</strong> {award.Organization}</p>
//                 <p><strong>Award Title:</strong> {award.AwardTitle}</p>
//                 <p><strong>Date:</strong> {new Date(award.Date).toLocaleDateString()}</p>
//                 <p><strong>Description:</strong> {award.Description}</p>
//               </div>
//             ))
//           )}
//         </section>
//       </div>

//       {/* Download Button */}
//       <button
//         onClick={handleDownload}
//         className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
//       >
//         Download PDF
//       </button>
//     </div>
//   );
// }

// export default Preview;








import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Preview() {
  const userId = "67f232eac0dac7307b299183";

  const [personalInfo, setPersonalInfo] = useState(null);
  const [contactInformation, setContactInformation] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [awardsData, setAwardsData] = useState([]);

  const resumeRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [personal, contact, education, experience, awards] = await Promise.all([
          axios.get(`http://localhost:5000/api/users/personal-info?userId=${userId}`),
          axios.get(`http://localhost:5000/api/users/contact-information?userId=${userId}`),
          axios.get(`http://localhost:5000/api/users/education-info?userId=${userId}`),
          axios.get(`http://localhost:5000/api/users/experience-info?userId=${userId}`),
          axios.get(`http://localhost:5000/api/users/awards-info?userId=${userId}`),
        ]);

        setPersonalInfo(personal.data);
        setContactInformation(contact.data);
        setEducationData(education.data.education || []);
        setExperienceData(experience.data.experience || []);
        setAwardsData(awards.data.awards || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async () => {
    const input = resumeRef.current;

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  if (!personalInfo || !contactInformation) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <div
        ref={resumeRef}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
        style={{ color: "#000000", backgroundColor: "#ffffff" }} // <- fix for html2canvas
      >
        <h1
          className="text-3xl font-bold text-center uppercase"
          style={{ color: "#1f2937" }} // gray-800
        >
          Resume
        </h1>

        {/* Personal Info */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4" style={{ color: "#374151" }}>Personal Information</h2>
          <p><strong>Name:</strong> {personalInfo.Firstname} {personalInfo.LastName}</p>
          <p><strong>Profession:</strong> {personalInfo.Profession}</p>
          <p><strong>Address:</strong> {personalInfo.Address}, {personalInfo.City}, {personalInfo.State} - {personalInfo.ZipCode}</p>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4" style={{ color: "#374151" }}>Contact Information</h2>
          <p><strong>Phone:</strong> {contactInformation.PhoneNumber}</p>
          <p><strong>Email:</strong> {contactInformation.Email}</p>
          <p><strong>LinkedIn:</strong> {contactInformation.Linkedin}</p>
          <p><strong>GitHub:</strong> {contactInformation.Github}</p>
          <p><strong>Portfolio:</strong> {contactInformation.Portfolio}</p>
          <p><strong>Twitter:</strong> {contactInformation.Twitter}</p>
          <p><strong>Instagram:</strong> {contactInformation.Instagram}</p>
        </section>

        {/* Education Info */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4" style={{ color: "#374151" }}>Education</h2>
          {educationData.length === 0 ? (
            <p>No education data available.</p>
          ) : (
            educationData.map((edu, index) => (
              <div key={index} className="mb-4">
                <p><strong>Institute:</strong> {edu.Institute}</p>
                <p><strong>Course:</strong> {edu.Course}</p>
                <p><strong>Location:</strong> {edu.State}, {edu.Country}</p>
                <p><strong>Duration:</strong> {edu.Start} - {edu.Finish}</p>
              </div>
            ))
          )}
        </section>

        {/* Experience Info */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4" style={{ color: "#374151" }}>Experience</h2>
          {experienceData.length === 0 ? (
            <p>No experience data available.</p>
          ) : (
            experienceData.map((exp, index) => (
              <div key={index} className="mb-4">
                <p><strong>Employer Name:</strong> {exp.EmployerName}</p>
                <p><strong>Company:</strong> {exp.Company}</p>
                <p><strong>Address:</strong> {exp.Address}</p>
                <p><strong>Role:</strong> {exp.Role}</p>
                <p><strong>Duration:</strong> {new Date(exp.Start).toLocaleDateString()} - {new Date(exp.Finish).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </section>

        {/* Awards Info */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4" style={{ color: "#374151" }}>Awards & Achievements</h2>
          {awardsData.length === 0 ? (
            <p>No awards data available.</p>
          ) : (
            awardsData.map((award, index) => (
              <div key={index} className="mb-4">
                <p><strong>Organization:</strong> {award.Organization}</p>
                <p><strong>Award Title:</strong> {award.AwardTitle}</p>
                <p><strong>Date:</strong> {new Date(award.Date).toLocaleDateString()}</p>
                <p><strong>Description:</strong> {award.Description}</p>
              </div>
            ))
          )}
        </section>
      </div>

      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
      >
        Download PDF
      </button>
    </div>
  );
}

export default Preview;
