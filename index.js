// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown =require("./utils/generateMarkdown");
const validateResponse = (response)=>{
    if (response != ""){
        return true;
    }
    else {
        return "Please input your response.";
    }
}
const additionSpread = (...array) => {
    return array.reduce((a, b) => a + b, 0);
  };
// TODO: Create an array of questions for user input
const questions = [
    {type:"input", 
    name: "title",
    message: "What is the title of your project?",
    validate: validateResponse},
    {type: "input",
    name:"description",
    message: "Please describe your project",
    validate: validateResponse},
    {type:"input", 
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: validateResponse},
    {type: "input",
    name:"usage",
    message: "Provide instructions and examples for use",
    validate: validateResponse},
    {
        type: "list",
        name: "license",
        message: "Choose the license for this project: ",
        choices: [
            "Apache 2.0",
            "GNU GPLv2",
            "Mozilla",
            "MIT",
            "None"
        ]
    },
    {type: "input",
    name: "contribution",
    message: "who contributed to this project?",
    validate: validateResponse},
    {type: "input",
    name: "test",
    message: "provide test instructions",
    validate: validateResponse},  
    {type: "input",
    name: "github",
    message: "What is your github username?",
    validate: validateResponse},
    {type: "input",
    name: "email",
    message: "What is your email?",
    validate: validateResponse}
];

function chooseLicense(license){
    if (license ==="Apache 2.0"){
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license ==="GNU GPLv2"){
        return "[![License](https://img.shields.io/badge/License-Ap[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)ache%202.0-blue.svg)](https://opensource.org/license/gpl-2-0/)"
    }
    else if (license ==="Mozilla"){
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (license ==="MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license ==="None"){
        return 
    }
}

// TODO: Create a function to write README file installation instructions, usage information, contribution guidelines, and test instructions
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data => {
        console.log(JSON.stringify(data, null, " "));
        //data.getLicense = getLicense(data.license)
        writeToFile("./README.md", data);
    }))
}

// Function call to initialize app
init();
