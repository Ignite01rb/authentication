import React from 'react';
import qutar from "../assests/q.png";
import spice from "../assests/spice.png";
import vis from "../assests/vis.png";
import air from "../assests/air.png";

function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      {/* Partners Section */}
      <div className="flex justify-center space-x-8 py-8">
        <img src={qutar} alt="Qatar Airways" className="h-10" />
        <img src={spice} alt="Spicejet" className="h-12" />
        <img src={vis} alt="vistara" className="h-12" />
        <img src={air} alt="airindia" className="h-12" />
        
      </div>

      {/* Subscribe Section */}
      <div className="bg-purple-100 mx-8 p-8 rounded-xl relative flex flex-col items-center">
        <h2 className="text-lg text-center text-gray-800 font-semibold mb-4">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>
        <div className="flex items-center space-x-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
            Subscribe
          </button>
        </div>
        <div className="absolute -top-4 -right-4 bg-purple-500 p-3 rounded-full">
          <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 8l6 6M8 14L2 8m0 0l6-6m-6 6h18" />
          </svg>
        </div>
      </div>

      {/* Footer Links and Info */}
      <div className="mt-12 mx-8 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-xl text-gray-900">Travello</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-6 lg:space-y-0">
          <div>
            <h4 className="font-semibold text-gray-800">Company</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Mobile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Contact</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Help/FAQ</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">More</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Total cost </a></li>
              <li><a href="#">Airline</a></li>
              <li><a href="#">Low fare tips</a></li>
            </ul>
          </div>
        </div>

        
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12">
        All rights travello@gmail.com
      </div>
    </footer>
  );
}

export default Footer;
