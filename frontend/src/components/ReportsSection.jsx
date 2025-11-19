import React from 'react';
import { FaComments, FaDownload, FaFileAlt } from 'react-icons/fa'; // Import icons for the list
import reportsPic from './reportsPic.jpg';

function ReportsSection() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 text-left space-y-6">
          <p className="text-sm uppercase tracking-wider text-green-500 mb-2 font-semibold">
            Custom Reporting Engine
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive reports, that always look good
          </h2>
          <p className="text-gray-600 mb-8">
            Generate polished, branded reports for your executives, clients, or auditors
          </p>

          {/* List of Features */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start space-x-4">
              <FaComments className="text-green-500 text-7xl" />
              <div>
                <h3 className="text-gray-900 font-semibold">Communicate vulnerability risks</h3>
                <p className="text-gray-600">
                  Get an executive PDF to share. See at a glance the vulnerabilities detected across all your targets or dive into each target, prioritized by risk level.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4">
              <FaDownload className="text-green-500 text-5xl" />
              <div>
                <h3 className="text-gray-900 font-semibold">Export for your business intelligence</h3>
                <p className="text-gray-600">
                  Use our built-in reporting or export as CSV, JSON, and XML to integrate with your BI tools, for full customization.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-4">
              <FaFileAlt className="text-green-500 text-4xl" />
              <div>
                <h3 className="text-gray-900 font-semibold">White label reporting</h3>
                <p className="text-gray-600">
                  Prepare custom white label reports for your clients. Make your logo and brand exclusive on the report.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-16 ml-14 flex justify-center">
          <img src={reportsPic} alt="Report Example" className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default ReportsSection;
