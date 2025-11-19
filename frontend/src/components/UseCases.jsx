import React from 'react';

const UseCases = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Scanner Use-Cases</h1>
      <div className="mb-6 p-4 bg-white border-l-4 border-blue-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">1. Basic HTTP Security Header Checks</h2>
        <p className="text-gray-600">Analyzes HTTP headers to ensure best security practices, such as the presence of X-Content-Type-Options, X-Frame-Options, and other critical headers.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-green-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">2. SQL Injection Check</h2>
        <p className="text-gray-600">Detects vulnerabilities that could allow attackers to execute malicious SQL queries to manipulate database content.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-yellow-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">3. Cross-Site Scripting (XSS) Check</h2>
        <p className="text-gray-600">Identifies points where user input is not properly sanitized, preventing the execution of malicious scripts in the user's browser.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-red-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">4. Directory Traversal Check</h2>
        <p className="text-gray-600">Checks for vulnerabilities that allow an attacker to access restricted directories and execute commands outside of the web server's root directory.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-indigo-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">5. CSRF Protection</h2>
        <p className="text-gray-600">Verifies that the web application implements proper Cross-Site Request Forgery protection mechanisms to prevent unauthorized actions.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-purple-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">6. Open Redirect Check</h2>
        <p className="text-gray-600">Scans for unvalidated redirects that could be leveraged to send users to malicious websites.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-pink-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">7. Authentication Vulnerability Check</h2>
        <p className="text-gray-600">Ensures that authentication mechanisms are properly implemented to prevent vulnerabilities such as weak password policies and session fixation.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-teal-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">8. Sensitive Data Exposure</h2>
        <p className="text-gray-600">Assesses if sensitive data like credit card information or personal identifiers are properly encrypted and protected.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-orange-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">9. Command Injection Check</h2>
        <p className="text-gray-600">Detects potential command injection vulnerabilities that could allow attackers to execute arbitrary commands on the server.</p>
      </div>
      <div className="mb-6 p-4 bg-white border-l-4 border-gray-500 shadow-sm rounded">
        <h2 className="text-2xl font-semibold text-gray-800">10. OWASP Dependency-Check</h2>
        <p className="text-gray-600">Analyzes project dependencies to identify any known vulnerabilities and security issues, ensuring compliance with OWASP standards.</p>
      </div>
    </div>
  );
};

export default UseCases;
