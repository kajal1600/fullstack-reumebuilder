

import React from "react";

import LINKEDIN from '../assets/Linkedinimg.png';
import INSTAGRAM from '../assets/instagraamimg.png';
import TWITTER from '../assets/twitterwebimg.png';
import FACEBOOK from '../assets/Facebookimg.png';
import { FOOTERITEMS } from "../constant";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-20 bg-gray-100">
      {/* Horizontal Line */}
      <div className="w-full h-[2px] bg-gray-300"></div>

      <div className=" mx-auto xl:px-20 md:flex-row  flex flex-col  lg:flex-row justify-between px-6 md:px-12 lg:px-20  py-12 gap-y-10">
        {/* Left Section */}
        <div className="flex-1 ">
          <p className="text-3xl font-bold">
            Resum<span className="text-violet-800">o</span>
          </p>
          <p className="text-lg mt-4">Updates right to your Inbox</p>

          {/* Subscription Form */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="px-4 border-2 border-gray-600 py-2 text-lg w-full sm:w-64"
            />
            <button className="bg-violet-800 hover:bg-violet-950 cursor-pointer rounded-2xl text-white md:px-4 px-6 py-2 w-full sm:w-auto">
              Subscribe
            </button>
          </div>

          {/* Footer Links and Social Media */}
          <div className="w-full flex md:mt-20 flex-col sm:flex-row justify-between items-center mt-10">
            <ul className="flex flex-wrap gap-x-4 text-lg text-gray-600 lg:gap-y-3">
              <li className="hover:font-bold hover:text-violet-700 cursor-pointer">
                Resumo 2022
              </li>
              <Link to={FOOTERITEMS.PRIVACYPOLICY}>
                <li className="hover:font-bold hover:text-violet-700 cursor-pointer">
                  Privacy Policy
                </li>
              </Link>
              <Link to={FOOTERITEMS.TERMOFUSE}>
                <li className="hover:font-bold hover:text-violet-700 cursor-pointer">
                  Terms of Use
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-30 gap-x-20 xl:gap-x-32">
          <ul className="flex flex-col gap-y-5 lg:gap-y-3">
            <li className="text-xl md:text-lg lg:text-xl font-bold">Our Story</li>
            <Link to={FOOTERITEMS.FAQ}>
              <li className="hover:text-violet-900  md:text-sm hover:font-bold hover:text-lg">FAQ</li>
            </Link>
            <Link to={FOOTERITEMS.CONTACT}>
              <li className="hover:text-violet-900  md:text-sm hover:font-bold hover:text-lg">Contact</li>
            </Link>
          </ul>
          <ul className="flex flex-col mt-10 md:mt-0 gap-y-5 lg:gap-y-3">
            <li className="text-xl md:text-lg font-bold">Services</li>
            <Link to={FOOTERITEMS.BUILDRESUME}>
              <li className="hover:text-violet-900 md:text-sm hover:font-bold hover:text-lg">Build Resume</li>
            </Link>
            <Link to={FOOTERITEMS.COVERLETTER}>
              <li className="hover:text-violet-900 md:text-sm hover:font-bold hover:text-lg">Cover Letter</li>
            </Link>
            <Link to={FOOTERITEMS.TEMPLATES}>
              <li className="hover:text-violet-900  md:text-sm hover:font-bold hover:text-lg">Templates</li>
            </Link>
          </ul>

          <ul className="flex flex-col mt-10 md:mt-0  gap-y-5 lg:gap-y-3">
            <li className="text-xl font-bold md:text-lg ">About Us</li>
            <Link to={FOOTERITEMS.DEVELOPERS}>
              <li className="hover:text-violet-900 md:text-sm hover:font-bold hover:text-lg">Developers</li>
            </Link>
            <Link to={FOOTERITEMS.MEETOURTEAM}>
              <li className="hover:text-violet-900 md:text-sm hover:font-bold hover:text-lg">Meet Our Team</li>
            </Link>
            <Link to={FOOTERITEMS.JOINTABULIO}>
              <li className="hover:text-violet-900 md:text-sm hover:font-bold hover:text-lg">Join Tabulio</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex  md:justify-end  lg:justify-end lg:mr-10 lg:-mt-28  md:-mt-26   gap-6 px-6 md:px-12 lg:px-20 xl:px-20 py-6">
        <a href="https://www.instagram.com/accounts/login/?hl=en">
          <img src={INSTAGRAM} alt="Instagram" className="w-10 h-10" />
        </a>
        <a href="https://in.linkedin.com/">
          <img src={LINKEDIN} alt="LinkedIn" className="w-10 h-10" />
        </a>
        <a href="https://x.com/?lang=en">
          <img src={TWITTER} alt="Twitter" className="w-8 h-9" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={FACEBOOK} alt="Facebook" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}

export default Footer;














