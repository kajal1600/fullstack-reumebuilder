import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function BuildResume() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Build Your Resume</h2>
        <p className="text-gray-700 text-lg mb-6">
          Creating a professional resume has never been easier. Our Resume Builder provides intuitive tools and customizable templates to help you craft a standout resume in minutes.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Whether you're a fresh graduate or an experienced professional, our platform is designed to highlight your skills and achievements in the best possible way. Start building your career today!
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-all">
          Start Building
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default BuildResume;