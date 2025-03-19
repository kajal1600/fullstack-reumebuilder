import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function CoverLetter() {
  return (
    <div>
      <Header/>
  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Craft Your Cover Letter</h2>
        <p className="text-gray-700 text-lg mb-6">
          A well-written cover letter is your chance to make a great first impression. Our Cover Letter Builder helps you create a professional, personalized letter in minutes.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Showcase your skills, highlight your achievements, and explain why you're the perfect fit for the job. Let your cover letter stand out and increase your chances of landing your dream job.
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all">
          Create Cover Letter
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CoverLetter;
