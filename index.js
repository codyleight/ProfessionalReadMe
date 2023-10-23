
const inquirer = require('inquirer'); //grabbing inquirer from our node files.
const fs = require('fs'); //using our filesystem so we can read and write within our code.
const icon = []; //array to store our icon photos, this is for the badge part of the assignment.

// questions for our prompt, questions array 1 is for our normal questions
const questions = ["What is your Project called?", "Can you Describe this project?", "Table of Contents", "Installation", "Usage", "Credits", "License" ,"Tests", "Questions"];
const personalQuestions = ["Provide your Github username (no link)", "Provide your Email"]; //personal questions comes at the end.


function writeToFile(response) { //we start building our readme here!

    response.license.forEach((license) => { //we handle license icons/badges here. this grabs the user input from our license question and adds the icons to an array if we have a match!
        switch (license) { //chose to handle this here, as we would have to pass the selected Licenses back and forth with the way I am doing things. TODO, we could split our http link to include whatever we want on the badge instead of specifically typing every single one out. If we had more licenses to handle.
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
//Start of writing our Readme out depending on user input. from here we use some stylistic approaches to make our readme look like a readme! We are also exporting readmeTest as the name for sake of the project. we also push the icons to the right of the readme top to make it look less cluttered.
fs.appendFile('READMETest.md', `# ${response.project}  <span style="float: right;">${icon.join('')}</span>
    
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



function init() { //on running our script init is invoked on line 152
    inquirer //using inquirier
    .prompt([ //using inquirer.prompt
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
            type: 'checkbox', //here we use a checkbox as we want to select specific licenses without the user having to recall them.
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
    .then((response) => writeToFile(response) //once our .prompt is ran through, and data is collected we pass the data (response) to our writetofile function.
  );



}
init(); //on running node/our script file we go to our prompt.




