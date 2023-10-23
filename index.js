
const inquirer = require('inquirer');
const fs = require('fs');
const icon = []; //array to store our icon photos, this is for the badge part of the assignment.

// questions for our prompt
const questions = ["What is your Project called?", "Can you Describe this project?", "Table of Contents", "Installation", "Usage", "Credits", "License" ,"Tests", "Questions"];
const personalQuestions = ["Provide your Github username (no link)", "Provide your Email"];


function writeToFile(response) {

    response.license.forEach((license) => { //we handle license icons/badges here.
        switch (license) {
          case "Mit License":
            icon.push("![Static Badge](https://img.shields.io/badge/Mit%20License-blue)");
            console.log("Here I am!");
            break;
          case "Apache License 2.0":
            icon.push("![Static Badge](https://img.shields.io/badge/Apache%20License-red)");
            console.log("apache should be added");
            break;
            case "Eclipse Public License 2.0":
            icon.push("![Static Badge](https://img.shields.io/badge/Eclipse%20License-green)");
            console.log("apache should be added");
            break;
          
            case "Boost Software License 1.0":
            icon.push("![Static Badge](https://img.shields.io/badge/BoostSoftware%20License-yellow)");
            console.log("apache should be added");
            break;
          
            case "GNU General Public License v3.0":
            icon.push("![Static Badge](https://img.shields.io/badge/GNU%20License-purple)");
            console.log("apache should be added");
            break;
          
          
        }
      });

console.log(icon); //testing icon array.
//Start of writing our Readme out depending on user input.
fs.appendFile('README.md', `# ${response.project}  <span style="float: right;">${icon.join('')}</span>
    
## Description:

-${response.description}

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation:

${response.install}

## Usage:

${response.usage}

## Credits:

${response.credits}

## License:

${response.license}

## Tests:

${response.test}

## Questions:

Contact Information

Github Link: https://github.com/${response.questions}

Email: [${response.questions1}](${response.questions1})
 
 
 
 \n`, note =>  note ? console.error(note) : console.log('Professional ReadMe Created!'))   
}

// TODO: Create a function to initialize app


function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'project',
          },
          {
            type: 'input',
            message: questions[1],
            name: 'description',
          },
         
          {
            type: 'input',
            message: questions[3],
            name: 'install',
          },
          {
            type: 'input',
            message: questions[4],
            name: 'usage',
          },
          {
            type: 'input',
            message: questions[5],
            name: 'credits',
          },
          {
            type: 'checkbox',
            message: questions[6],
            name: 'license',
            choices: ['Mit License', 'Apache License 2.0', 'Eclipse Public License 2.0', 'Boost Software License 1.0', 'GNU General Public License v3.0']
          },
          {
            type: 'input',
            message: questions[7],
            name: 'test',
          },
          {
            type: 'input',
            message: personalQuestions[0],
            name: 'questions',
          },
          {
            type: 'input',
            message: personalQuestions[1],
            name: 'questions1',
          },
    ])
    .then((response) => writeToFile(response)
  );



}
init();




/*GIVEN a command-line application that accepts user input
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README  */