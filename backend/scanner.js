const axios = require('axios');
const {checkBasicHttpHeaders} = require('./scanners/httpHeaders');
const {checkXSS} = require('./scanners/xssCheck');
const {checkDirectoryTraversal} = require('./scanners/directoryTraversal');
const {checkCSRFProtection} = require('./scanners/crsfCheck');
const {checkOpenRedirect} = require('./scanners/openRedirect');
const {checkSqlInjection} = require('./scanners/sqlInjection');

/* const checkAuthenticationVulnerabilities = async (url) => {
    // Check for Authentication vulnerabilities
};

const checkSensitiveDataExposure = async (url) => {
    // Check for Sensitive Data Exposure
};

const checkCommandInjection = async (url) => {
    // Check for Command Injection vulnerabilities
};

const checkDependencyVulnerabilities = async (url) => {
    // Use tools like OWASP Dependency-Check for dependency vulnerabilities
}; */

const scanWebsite = async (url) => {
    const report = {};
    // Run each check
    report.basicHttpHeaders = await checkBasicHttpHeaders(url);
    report.checkXSS = await checkXSS(url);
    report.checkDirectoryTraversal = await checkDirectoryTraversal(url);
    report.checkCSRFProtection = await checkCSRFProtection(url);
    report.checkOpenRedirect = await checkOpenRedirect(url);
    report.checkSqlInjection = await checkSqlInjection(url);
    /* report.sqlInjection = await checkSqlInjection(url);
    report.xss = await checkXSS(url);
    report.directoryTraversal = await checkDirectoryTraversal(url);
    report.csrfProtection = await checkCSRFProtection(url);
    report.openRedirect = await checkOpenRedirect(url);
    report.authenticationVulnerabilities = await checkAuthenticationVulnerabilities(url);
    report.sensitiveDataExposure = await checkSensitiveDataExposure(url);
    report.commandInjection = await checkCommandInjection(url);
    report.dependencyVulnerabilities = await checkDependencyVulnerabilities(url); */

    return report;
};

module.exports = { scanWebsite };
