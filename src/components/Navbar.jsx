import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assests/eg.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 max-md:h-10 m-0 relative">
      <nav className="flex justify-between items-center p-0 md:px-14 max-md:px-4">
        <span className="logo">
          <Link to="/">
            <img src={Logo} alt="TripTailor" className="w-40 md:w-56" />
          </Link>
        </span>

        <div className="hidden md:flex gap-4 justify-between items-center">
          <Link to="/about" className="text-gray-700 hover:text-black">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">
            Contact Us
          </Link>
           <Link to="/login">
            <button className="login-btn btn1 px-4 md:px-6 py-1 md:py-2">
              <p>Log In</p>
            </button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn btn2 border-[1.6px] border-black rounded-md px-4 md:px-6 py-1 md:py-2">
              <p className="font-semibold">Sign Up</p>
            </button>
          </Link> 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
