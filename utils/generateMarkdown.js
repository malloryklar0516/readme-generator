// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==="Apache 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}
else if (license ==="GNU GPLv2"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
}
else if (license ==="Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}
else if (license ==="MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
else if (license ==="None"){
    return ""
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="Apache 2.0"){
    return "https://opensource.org/licenses/Apache-2.0"
}
else if (license ==="GNU GPLv2"){
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
}
else if (license ==="Mozilla"){
    return "https://opensource.org/licenses/MPL-2.0"
}
else if (license ==="MIT"){
    return "https://opensource.org/license/mit/"
}
else if (license ==="None"){
    return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==="None"){
    return ""}
    else if (license === "Apache 2.0"  || "GNU GPLv2"||"Mozilla"||"MIT") {
    return `
    ${license}
    ${renderLicenseLink(license)}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)} 
  # Description
  ${data.description}
  # Table of Contents
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-License)
  * [Contribution](#-Contribution)
  * [Testing](#-Testing)
  * [Questions](#-Questions)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contribution
  ${data.contribution}
  # License
  ${renderLicenseSection(data.license)}
  # Testing
  ${data.test}
  # Questions
  See contact information below if you have any questions.
  https://github.com/${data.github}\n
  ${data.email}
`;
}

module.exports = generateMarkdown;
