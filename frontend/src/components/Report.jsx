import React from 'react';
import html2pdf from 'html2pdf.js';
import { LuDownload } from "react-icons/lu";

const ScanReport = ({ report }) => {
    if (!report) return <p className="mt-14 text-center text-gray-500">No report data available.</p>;

    // Function to download PDF using html2pdf.js
    const downloadPDF = () => {
        const element = document.getElementById('report-content');
        const options = {
            margin: 0.5,
            filename: 'scan-report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(element).save();
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg relative flex justify-center align-middle mb-3">
            {/* PDF Download Button */}
            <button
                onClick={downloadPDF}
                className="absolute top-4 right-4 mt-2 mr-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
            >
                <LuDownload className='text-2xl'/>
            </button>

            {/* Report Content */}
            <div id="report-content">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Website Vulnerability Scan Report</h1>

                {/* HTTP Headers Check */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Basic HTTP Headers Check</h2>
                    {report.basicHttpHeaders && report.basicHttpHeaders.missingHeaders.length > 0 ? (
                        <>
                            <p className="text-gray-700 mb-2">{report.basicHttpHeaders.message}</p>
                            <ul className="list-disc list-inside text-gray-700">
                                {report.basicHttpHeaders.missingHeaders.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p className="text-green-600">All essential HTTP headers are present.</p>
                    )}
                </section>

                {/* XSS Check */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Cross-Site Scripting (XSS) Check</h2>
                    <p className="text-gray-700">{report.checkXSS || 'XSS check not performed.'}</p>
                </section>

                {/* Directory Traversal Check */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Directory Traversal Check</h2>
                    <p className="text-gray-700">{report.checkDirectoryTraversal || 'Directory traversal check not performed.'}</p>
                </section>

                {/* CSRF Protection Check */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">CSRF Protection Check</h2>
                    {Array.isArray(report.checkCSRFProtection) && report.checkCSRFProtection.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-700">
                            {report.checkCSRFProtection.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-green-600">CSRF protection appears to be adequate.</p>
                    )}
                </section>

                {/* Open Redirect Check */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Open Redirect Check</h2>
                    <p className="text-gray-700">{report.checkOpenRedirect || 'Open redirect check not performed.'}</p>
                </section>

                {/* SQL Injection Check */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">SQL Injection Check</h2>
                    {report.checkSqlInjection && report.checkSqlInjection.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-700">
                            {report.checkSqlInjection.map((item, index) => (
                                <li key={index}>
                                    <strong>Input Name:</strong> {item.inputName || 'N/A'}<br />
                                    <strong>Payload:</strong> {item.payload}<br />
                                    <strong>Status:</strong> {item.status}<br />
                                    <strong>Reason:</strong> {item.reason}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700">No SQL Injection vulnerabilities found.</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default ScanReport;
