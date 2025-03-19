import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function MeetOurTeam() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Meet Our Team</h2>
        <p className="text-gray-700 text-lg mb-6">
          Our team consists of passionate professionals dedicated to making the Resume Builder platform the best in the industry. With expertise in design, development, and career counseling, we work together to provide a seamless experience for job seekers.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Each member of our team brings unique skills and insights to ensure that users get the best guidance and tools to craft their perfect resumes. We are committed to innovation and excellence.
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

export default MeetOurTeam;