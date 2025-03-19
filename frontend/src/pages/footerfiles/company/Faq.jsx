import React from 'react';
import Header from '../../../component/Header'; // Import Header component
import Footer from '../../../component/Footer'

function Faq() {
  return (
    <div>
      {/* Include Header at the top */}
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 text-lg mb-6">
            Here are some common questions and answers to help you understand how our Resume Builder works.
          </p>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">1. How do I create a resume?</h3>
            <p className="text-gray-700 mb-4">
              Simply sign up, choose a template, fill in your details, and download your professional resume.
            </p>

            <h3 className="text-xl font-semibold text-purple-600 mb-2">2. Is the Resume Builder free to use?</h3>
            <p className="text-gray-700 mb-4">
              Yes, we offer a free version with essential features, and a premium version for advanced customization.
            </p>

            <h3 className="text-xl font-semibold text-purple-600 mb-2">3. Can I edit my resume after downloading?</h3>
            <p className="text-gray-700 mb-4">
              Yes! You can always come back and make updates to your resume anytime.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
}

export default Faq;
