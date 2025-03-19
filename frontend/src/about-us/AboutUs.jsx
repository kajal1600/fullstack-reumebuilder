import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

function AboutUs() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    
      <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-lg text-center">
    
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to Resume Builder, your trusted partner in crafting professional resumes that make an impact. Our mission is to help job seekers showcase their skills and experience effectively, making the hiring process easier and more successful.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          With a user-friendly interface and expertly designed templates, we provide a seamless experience for creating resumes that stand out. Whether you're a fresh graduate or an experienced professional, our platform is tailored to meet your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Easy to Use</h3>
            <p className="text-gray-600 mt-2">Create a professional resume in minutes with our simple and intuitive design tools.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Customizable Templates</h3>
            <p className="text-gray-600 mt-2">Choose from a variety of stunning templates designed by industry professionals.</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Job Ready</h3>
            <p className="text-gray-600 mt-2">Get insights and tips to make your resume ATS-friendly and attractive to recruiters.</p>
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all">
          Get Started
        </button>
      </div>
      
    </div>
    <Footer   className="fixed bottom-0 w-full"   />
    </div>
  );
}

export default AboutUs;







