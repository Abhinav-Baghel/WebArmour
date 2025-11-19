import React from 'react';

function PowerSection() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side Content */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-light text-white">
            See <span className="font-bold">the power</span> of
            <br /> WebArmour
          </h2>
          <p className="text-gray-400 mt-4">
            ActiveScan enables companies to meet compliance and security goals.
          </p>
        </div>

        {/* Right Side Buttons */}
        {/* <div className="md:w-1/2 mt-8 md:mt-0 flex space-x-4 justify-center md:justify-end">
          <button className="bg-transparent text-white border border-gray-500 px-6 py-2 rounded-md hover:bg-gray-700">
            Run a free scan
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            Demo Account
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default PowerSection;
