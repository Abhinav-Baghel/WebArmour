import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scanWebsite } from '../api/api';

function Home({ setReport }) {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'http://localhost:5500/details';
        const formData = new FormData();
        formData.append('url', 'google.com');
        formData.append('name', 'Kaushal');
        formData.append('branch', 'IT');
        formData.append('rollNo', '0827IT221074');

        const sendDetails = async () => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    body: formData, 
                });
                console.log(await res.text());
            } catch (err) {
                console.error(`This is the error occurred: ${err}`);
            }
        };
        sendDetails();
    }, []);

    const handleScan = async () => {
        debugger
        if (url) {
            setLoading(true);
            setReport(null);
            setError('');
            setUrl('');
            try {
                const scanReport = await scanWebsite(url);
                console.log(scanReport);
                setReport(scanReport);

                // Redirect to /report after setting the report data
                navigate('/report');
            } catch (err) {
                console.error('An error occurred while scanning the website.');
                setError('Unable to scan the website. Please try again later.');
            } finally {
                setLoading(false);
            }
        }
    };

    // Function to reset the error state after a timeout
    const resetError = () => {
        setTimeout(() => {
            setError('');
        }, 5000);
    };

    return (
        <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-green-100">
            {/* Content */}
            <div className="relative z-10 text-center px-6 py-10">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Run Vulnerability Scans
                </h1>
                <h2 className="text-3xl font-light text-gray-500 mb-6">
                    without the hassle
                </h2>
                <p className="text-gray-600 mb-8">
                    Scan your websites, servers, networks, and APIs. View dashboards, get
                    threat alerts, and generate audit-ready reports.
                </p>

                {/* Loader */}
                {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="loader bg-black-500 rounded-t-full w-20 h-20 animate-spin"></div>
                    </div>
                ) : (
                    <>
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {error}
                                {resetError()}
                            </div>
                        )}

                        {/* Scan Input Box */}
                        <div className="flex items-center justify-center">
                            <input
                                value={url}
                                type="text"
                                placeholder="Enter a URL, IP address or hostname"
                                className="p-4 border border-gray-300 rounded-l-lg w-80 focus:outline-none"
                                onChange={(e) => setUrl(e.target.value)}
                                required
                            />
                            <button
                                onClick={handleScan}
                                className="bg-green-500 text-white px-6 py-4 rounded-r-lg font-semibold hover:bg-green-600"
                            >
                                Scan now →
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Home;
