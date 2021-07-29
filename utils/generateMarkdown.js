// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return `# ${data.title}

//`;
//}

//module.exports = generateMarkdown;

function generateMarkdown(data) {
  if (data.licenses === "MIT License") {
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.licenses === "APACHE 2.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

    
  return `# Table of Contents
  1. [Github](#Github)
  2. [Email](#Email)
  3. [Title](#Title)
  4. [Details](#Details)
  5. [Installation](#Installation)
  6. [Benefits](#Benefits)
  7. [Licenses](#Licenses)
  8. [Contributions](#Contributions)
  9. [Test](#Test)
  
  # ${data.title}
# Details
${data.details}
# Installation
${data.installation}
# Benefits
${data.benefits}
# Licenses
${data.licenses}
# Contributions
${data.contributions}
# Test
${data.test}
# Github
${data.github}
# Email
${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  