import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function AboutUsFooter() {
  return (
    <div>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Resume Builder is dedicated to helping job seekers craft the perfect resume with ease. Our platform offers customizable templates, professional design options, and user-friendly features to ensure your resume stands out.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to simplify the job application process by providing a seamless and intuitive resume-building experience. Whether you're a student, professional, or career changer, we have the tools to help you succeed.
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all">
          Learn More
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default AboutUsFooter;
