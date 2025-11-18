const axios = require('axios');
const cheerio = require('cheerio');  // For parsing HTML to find CSRF tokens

const checkCSRFProtection = async (url) => {
    try {
        // Fetch the site HTML and cookies
        const response = await axios.get(url);
        const cookies = response.headers['set-cookie'] || [];
        const html = response.data;

        let vulnerabilitiesFound = [];

        // --- 1. Check for SameSite cookies ---
        let sameSiteCookies = false;
        cookies.forEach(cookie => {
            if (cookie.includes('SameSite=Strict') || cookie.includes('SameSite=Lax')) {
                sameSiteCookies = true;
            }
        });

        if (!sameSiteCookies) {
            vulnerabilitiesFound.push('No SameSite cookies found. The site might be vulnerable to CSRF attacks.');
        }

        // --- 2. Check for CSRF token in forms ---
        const $ = cheerio.load(html);
        let csrfTokenFound = false;

        // Look for CSRF tokens in the form
        $('form').each((index, form) => {
            const csrfToken = $(form).find('input[name="_csrf_token"], input[name="csrf_token"]').val();
            if (csrfToken) {
                csrfTokenFound = true;
            }
        });

        if (!csrfTokenFound) {
            vulnerabilitiesFound.push('No CSRF token found in forms. The site might be vulnerable to CSRF attacks.');
        }

        // --- 3. Check for CSRF tokens in HTTP request headers ---
        // Simulate a CSRF attack with a fake token
        const csrfHeaderResponse = await axios.get(url, {
            headers: {
                'X-CSRF-Token': 'fake-token-for-testing'
            }
        });

        // Check if the server responds with an error when a fake CSRF token is sent
        if (csrfHeaderResponse.status === 200) {
            vulnerabilitiesFound.push('No CSRF token validation in request headers. The site might be vulnerable to CSRF attacks.');
        }

        // Final decision
        if (vulnerabilitiesFound.length === 0) {
            return 'CSRF protection appears to be properly implemented (SameSite cookies and CSRF tokens).';
        } else {
            return vulnerabilitiesFound;
        }

    } catch (error) {
        console.error('Error performing CSRF protection check:', error.message);
        return 'Failed to perform CSRF protection check.';
    }
};

module.exports = { checkCSRFProtection };
