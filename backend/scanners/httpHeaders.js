const axios = require('axios');

const checkBasicHttpHeaders = async (url) => {
    try {
        // Ensure the URL starts with http/https
        if (!/^https?:\/\//i.test(url)) {
            url = `https://${url}`;
        }

        // Perform the HTTP request
        const response = await axios.get(url, {
            timeout: 10000  // Increase timeout to 10 seconds (default is usually 0, which means no timeout)
        });
        const headers = response.headers;
        console.log(headers);

        const missingHeaders = [];

        // List of important security headers to check
        if (!headers['strict-transport-security']) {
            missingHeaders.push('Strict-Transport-Security (HSTS)');
        }
        if (!headers['x-content-type-options']) {
            missingHeaders.push('X-Content-Type-Options');
        }
        if (!headers['x-frame-options']) {
            missingHeaders.push('X-Frame-Options');
        }
        if (!headers['x-xss-protection']) {
            missingHeaders.push('X-XSS-Protection');
        }
        if (!headers['content-security-policy']) {
            missingHeaders.push('Content-Security-Policy (CSP)');
        }
        if (!headers['referrer-policy']) {
            missingHeaders.push('Referrer-Policy');
        }
        if (!headers['permissions-policy']) {
            missingHeaders.push('Permissions-Policy');
        }
        if (!headers['cache-control']) {
            missingHeaders.push('Cache-Control');
        }

        // Return results
        return missingHeaders.length
            ? { missingHeaders, message: 'Some essential security headers are missing.' }
            : { message: 'All essential security headers are set properly.' };
    } catch (error) {
        console.error(`Error fetching headers from ${url}:`, error.message);
        return { error: 'Failed to retrieve headers. Ensure the URL is valid and reachable.' };
    }
};

module.exports = { checkBasicHttpHeaders };
