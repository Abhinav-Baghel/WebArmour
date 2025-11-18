const axios = require('axios');

const checkXSS = async (url) => {
    const xssPayloads = [
        '<script>alert("XSS")</script>',
        '"><img src=x onerror=alert("XSS")>',
        '<svg onload=alert("XSS")>',
        '<body onload=alert("XSS")>'
    ];

    let vulnerabilitiesFound = [];

    try {
        // Loop through each payload and test the URL
        for (const payload of xssPayloads) {
            const testUrl = `${url}?q=${encodeURIComponent(payload)}`; // Appending payload as a query parameter
            
            const response = await axios.get(testUrl);

            // Check response content to see if the payload is reflected
            if (response.data.includes(payload)) {
                vulnerabilitiesFound.push(`XSS payload reflected: ${payload}`);
            }
        }

        return vulnerabilitiesFound.length > 0 ? vulnerabilitiesFound : 'No XSS vulnerabilities found';
    } catch (error) {
        console.error('Error performing XSS check:', error.message);
        return 'Failed to perform XSS check';
    }
};

module.exports = { checkXSS };
