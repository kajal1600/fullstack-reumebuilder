import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function Developers() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Meet Our Developers</h2>
        <p className="text-gray-700 text-lg mb-6">
          Our team of passionate developers is dedicated to making Resume Builder the best platform for creating professional resumes. We believe in innovation, efficiency, and user-friendly design.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          With expertise in modern web technologies, our developers work tirelessly to enhance functionality and improve user experience. Their goal is to ensure that your resume-building process is smooth and hassle-free.
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all">
          Learn More
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Developers;