import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function Contact() {
  return (
  <div>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-4">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Have questions or need assistance? We’re here to help! Reach out to us for support, feedback, or any inquiries regarding our Resume Builder platform.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Email: support@resumebuilder.com
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Phone: +1 234 567 890
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Address: 123 Resume St, Job City, USA
        </p>
        <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-all">
          Get In Touch
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
