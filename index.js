const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
        {
            type: 'input',
            message: 'What will be the title of your project?',
            name: 'title',
        }, {
            type: 'input',
            message: 'Please, briefly describe the application',
            name: 'description',
        }, {
            type: 'input',
            message: 'How would you install the application?',
            name: 'install',
        }, {
            type: 'input',
            message: 'What would this application be used for?',
            name: 'usage',
        },{
            type: 'input',
            message: 'Please list all collaborators',
            name: 'collaborators',
        }, {
            type: 'input',
            message: 'How would you test the application?',
            name: 'test',
            default: 'npm test',
        }, {
            type: 'checkbox',
            message: 'Which licenses were utilized?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'none'],
        }, { 
            type: 'input',
            message: 'Please type your complete GitHub username',
            name: 'username',
        }, {
            type:'input',
            message:'Please enter your email address',
            name:'email'
        }, {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution',
        },
    ];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};


function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating ReadMe...✔️');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });

};

init();