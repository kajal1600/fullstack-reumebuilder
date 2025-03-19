import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function JoinTabulio() {
  return (
    <div>
      <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Join Tabulio</h2>
        <p className="text-gray-700 text-lg mb-6">
          Tabulio is an innovative platform designed for professionals and job seekers to showcase their skills, connect with opportunities, and build strong professional networks.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          By joining Tabulio, you gain access to exclusive job listings, portfolio-building tools, and a community of like-minded individuals who are eager to collaborate and grow together.
        </p>
        <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all">
          Get Started
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default JoinTabulio;
