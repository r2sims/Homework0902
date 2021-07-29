// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const inq = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');

//    <!-- Questions -->
//const questions = [

    const terminalQuestions = () => {
        inquirer.prompt([



    {
        type:'input',
        name:'github',
        message:'What is your github username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
    {
        type:'input',
        name:'title',
        message:'What is the title of your project?',
    },
    {
        type:'input',
        name:'details',
        message:'What are the details of your project?',
        
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps for installation?',
    },
    {
        type:'input',
        name:'benefits',
        message:'What are some benefits for the use of your project?',
    },
    {
        type:'list',
        name:'licenses',
        message:'What type of license(s) was chosen for your project?',
        choices:['MIT License', "APACHE 2.0", "None"]
    },
    {
       type:'input',
       name:'contributions',
       message:'Were there any contributions and/or collaborators to your project',
    },
    {
      type:'input',
      name:'test',
      message:'What steps were taken to test project?',
   },
//]
    //function init() {
      //inq.prompt(questions).then((data) => {
          //console.log(data)
      //fs.writeFile('GeneratedREADME/GeneratedREADME.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
   //}

//init();

]).then((data) => {
    console.log(data);
    const content = generateMarkdown(data);
    fs.writeFile('README.md', content, err => {
        if(err) console.log(err);
        else console.log('Success!');
    });
});
}

function init() {
terminalQuestions()
}

init();