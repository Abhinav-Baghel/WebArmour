import React from 'react';
import { FaBullseye, FaSignal , FaBox } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { FiInbox } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";

function WhatWeDo() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm uppercase tracking-wider text-teal-500 mb-2">
          What We Do
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Our scanner is an easy-to-use solution for running powerful vulnerability scans and building effective vulnerability management programs.
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center mt-8 gap-6 px-6">
        {/* Card 1 - Vulnerabilities */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-64 text-left">
      <p className="text-gray-800 font-semibold mb-6 flex items-center">
        <span role="img" aria-label="download" className="mr-2"><IoDownloadOutline /></span> Vulnerabilities
      </p>
      {/* SQL Injections */}
      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md p-2 mb-3">
        <span className="text-gray-800 font-bold text-lg mr-2">07</span>
        <p className="text-gray-700">SQL Injections</p>
      </div>
      {/* XSS */}
      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md p-2">
        <span className="text-gray-800 font-bold text-lg mr-2">04</span>
        <p className="text-gray-700">XSS</p>
      </div>
    </div>

        {/* Card 3 - Current Risks */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-64 text-left">
      <p className="text-gray-800 font-semibold mb-4 flex items-center">
        <FaTriangleExclamation  className="mr-2" /> Current Risks
      </p>
      <div className="bg-purple-400 rounded-md p-2 mb-2">
        <p className=" font-semibold">Critical - 14</p>
      </div>
      <div className="bg-red-400 rounded-md p-2 mb-2">
        <p className=" font-semibold">High - 03</p>
      </div>
      <div className="bg-yellow-400 rounded-md p-2">
        <p className="font-semibold">Medium - 08</p>
      </div>
    </div>

        {/* Card 4 - Security Over Time */}
    <div className="bg-white rounded-lg shadow-lg p-4 w-64 text-left">
      <p className="text-gray-800 font-semibold mb-4 flex items-center">
        <span role="img" aria-label="lock" className="mr-2"><MdOutlineSecurity /></span> Security Over Time
      </p>
      <div className="flex items-end ml-8 mt-4 space-x-0">
        {/* Vertical Bars */}
        <div className="bg-yellow-400 h-16 w-10 flex items-center justify-center text-black font-bold">
          09
        </div>
        <div className="bg-orange-400 h-24 w-10 flex items-center justify-center text-black font-bold">
          12
        </div>
        <div className="bg-red-400 h-32 w-10 flex items-center justify-center text-black font-bold">
          14
        </div>
        <div className="bg-purple-400 h-12 w-10 flex items-center justify-center text-black font-bold">
          07
        </div>
      </div>
    </div>

        {/* Card 5 - Assets */}
       <div className="bg-white rounded-lg shadow-lg p-4 w-64 text-left">
      <p className="text-gray-800 font-semibold mb-4 flex items-center">
        <FiInbox  className="mr-2 text-gray-800" /> Assets
      </p>
      <div className="flex justify-between space-x-2">
        {/* Left Asset Card */}
        <div className="flex flex-col justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 w-28 h-32">
          <div className="text-gray-800 mb-auto">
            <FaBullseye className="text-4xl text-gray-800" />
          </div>
          <p className="text-gray-800 font-bold text-2xl mt-auto self-end">14</p>
        </div>

        {/* Right Asset Card */}
        <div className="flex flex-col justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 w-28 h-32">
          <div className="text-gray-800 mb-auto">
            <FaSignal className="text-4xl text-gray-800" />
          </div>
          <p className="text-gray-800 font-bold text-2xl mt-auto self-end">20</p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
