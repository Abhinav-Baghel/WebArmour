import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Use Cases Column */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Scans</h4>
          <ul className="space-y-2 text-sm">
            <li>HTTP Security Header Checks</li>
            <li>SQL Injection Check</li>
            <li>Cross-Site Scripting (XSS) Check</li>
            <li>Directory Traversal Check</li>
            <li>CSRF Protection</li>
            <li>Open Redirect Check</li>
            <li>Authentication Vulnerability Check</li>
            <li>Sensitive Data Exposure</li>
            <li>Command Injection Check</li>
            <li>OWASP Dependency-Check</li>
          </ul>
        </div>

        {/* Compliance Use Cases Column */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Compliance Use Cases</h4>
          <ul className="space-y-2 text-sm">
            <li>ISO 27001</li>
            <li>SOC 2</li>
            <li>GDPR</li>
            <li>TPN</li>
          </ul>
        </div>

        {/* Scanners Column */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Scanners</h4>
          <ul className="space-y-2 text-sm">
            <li>OpenVAS - Network Scan</li>
            <li>Nmap - Port Scan</li>
            <li>OWASP ZAP - Web Applications</li>
            <li>OWASP ZAP - API Security Scan</li>
            <li>SSLyze - TLS & SSL</li>
            <li>sqlmap - SQL Injection</li>
            <li>XSStrike - XSS Scanner</li>
          </ul>
        </div>

        {/* Partners & Comparisons Column */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Partners</h4>
          <ul className="space-y-2 text-sm">
            <li>Affiliate Referral Program</li>
          </ul>
          <h4 className="font-semibold text-gray-100 mt-6 mb-4">Comparisons</h4>
          <ul className="space-y-2 text-sm">
            <li>Qualys vs WebArmour</li>
            <li>Nessus Tenable vs WebArmour</li>
            <li>Netsparker vs WebArmour</li>
            <li>Detectify vs WebArmour</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Contact Us</h4>
          <p className="text-sm mb-2">Reach out to us with any questions or inquiries.</p>
          <ul className="space-y-2 text-sm">
            <li>Email: abhinavbaghel831@gmail.com</li>
            <li>Phone: 7489740540</li>
            <li>Address: Acropolis Indore</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/Abhinav-Baghel" className="text-gray-300 hover:text-gray-100">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-singh-baghel-147ab4319/" className="text-gray-300 hover:text-gray-100">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abhinavbaghel831@gmail.com" className="text-gray-300 hover:text-gray-100">
              <FaEnvelope className="w-5 h-5" />
            </a>
            <a href="tel:+917489740540" className="text-gray-300 hover:text-gray-100">
              <FaPhone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 WebArmour. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
