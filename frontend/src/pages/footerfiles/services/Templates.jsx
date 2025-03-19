import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function Templates() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">Professional Resume Templates</h2>
        <p className="text-gray-700 text-lg mb-6">
          Browse our collection of expertly designed resume templates, tailored for different industries and career levels. Whether you're applying for a corporate job or a creative role, we have the perfect template for you.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Customize your resume with ease, adjusting fonts, colors, and layouts to match your professional brand. Stand out from the crowd with a resume that highlights your skills and experience effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700">Modern Templates</h3>
            <p className="text-gray-600 mt-2">Sleek and contemporary designs for professionals who want to make a strong impression.</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700">Creative Templates</h3>
            <p className="text-gray-600 mt-2">Unique and stylish layouts perfect for designers, artists, and creatives.</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700">Professional Templates</h3>
            <p className="text-gray-600 mt-2">Classic and structured templates designed for corporate and business roles.</p>
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all">
          Explore Templates
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Templates;