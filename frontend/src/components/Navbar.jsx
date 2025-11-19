import React from 'react';
import { AiOutlineSecurityScan } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white/80 shadow-lg backdrop-blur-md sticky top-0 z-50">
            {/* Left side: Logo and Name */}
            <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate('/')}
            >
                <div className="p-2 rounded">
                    <AiOutlineSecurityScan className="text-gray-800 text-4xl" />
                </div>
                <span className="text-xl font-semibold text-gray-900">WebArmour</span>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex space-x-6 text-gray-600">
              <div onClick={() => navigate('/use-cases')} className='cursor-pointer'>Use Cases</div>
              <a href="#scanners" className="hover:text-gray-800">Scanners</a>
              <a href="#pricing" className="hover:text-gray-800">Pricing</a>
              <a href="#resources" className="hover:text-gray-800">Resources</a>
              <a href="#blog" className="hover:text-gray-800">Blog</a>
          </div>

            {/* Right side: Report Button */}
            <div className="flex space-x-3">
                <button
                    onClick={() => navigate('/report')}
                    className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                    Report
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
