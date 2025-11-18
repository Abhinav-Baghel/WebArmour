const axios = require('axios');

const checkDirectoryTraversal = async (url) => {
    // List of potential path traversal payloads to test
    const traversalPayloads = [
        '../../../etc/passwd',            // Unix-based systems
        '../../../../../../../etc/shadow', // Unix shadow file (for password hashes)
        '..\\..\\..\\..\\..\\windows\\win.ini', // Windows system (could access system files)
        '....//....//....//....//etc/passwd' // Another variation
    ];

    let vulnerabilitiesFound = [];

    try {
        // Loop through each payload and test the URL
        for (const payload of traversalPayloads) {
            const testUrl = `${url}?file=${encodeURIComponent(payload)}`; // Assuming the parameter is 'file'
            
            const response = await axios.get(testUrl);

            // Check if the response content contains an error or sensitive file name
            if (response.status === 200) {
                // You can make this check more sophisticated based on expected behavior
                // For instance, check if the content or the response body indicates that
                // a file has been returned or the server exposed sensitive information
                if (response.data.includes('Error') || response.data.includes('Not Found')) {
                    vulnerabilitiesFound.push(`Potential error or exposure: ${payload}`);
                }
            }
        }

        return vulnerabilitiesFound.length > 0 ? vulnerabilitiesFound : 'No directory traversal vulnerabilities found';
    } catch (error) {
        console.error('Error performing directory traversal check:', error.message);
        return 'Failed to perform directory traversal check';
    }
};

module.exports = { checkDirectoryTraversal };
