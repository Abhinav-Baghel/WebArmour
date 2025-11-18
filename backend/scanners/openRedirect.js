const axios = require('axios');
const cheerio = require('cheerio');  // For parsing HTML

const checkOpenRedirect = async (url) => {
    try {
        // Step 1: Fetch the site HTML
        const response = await axios.get(url);
        const html = response.data;

        let vulnerabilitiesFound = [];

        // Step 2: Look for potential URL parameters
        const $ = cheerio.load(html);
        
        // Extract all links in the page to find redirect URLs
        $('a[href]').each((index, element) => {
            const link = $(element).attr('href');

            // Check if the link contains a parameter (common ones for redirects)
            if (link.includes('redirect') || link.includes('url') || link.includes('next') || link.includes('destination')) {
                const maliciousURL = 'http://example.com'; // Safe testing URL
                const testUrl = link.includes('?') ? `${link}&url=${encodeURIComponent(maliciousURL)}` : `${link}?url=${encodeURIComponent(maliciousURL)}`;

                // Simulate clicking the link with a malicious URL
                axios.get(testUrl)
                    .then(response => {
                        // If the server redirects, then it's vulnerable
                        if (response.request.res.responseUrl && response.request.res.responseUrl !== testUrl) {
                            vulnerabilitiesFound.push(`Open redirect found with URL: ${testUrl}`);
                        }
                    })
                    .catch(err => {
                        console.log(`Error testing URL: ${testUrl} - ${err.message}`);
                    });
            }
        });

        // Final result
        if (vulnerabilitiesFound.length === 0) {
            return 'No open redirect vulnerabilities found.';
        } else {
            return vulnerabilitiesFound;
        }

    } catch (error) {
        console.error('Error performing open redirect check:', error.message);
        return 'Failed to perform open redirect check.';
    }
};

module.exports = { checkOpenRedirect };
