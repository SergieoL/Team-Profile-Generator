const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const generateHtml = require('./src/template');
var employees = [];
var engineers = [];
var interns = [];

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another Employee or finish building your team?',
            name: 'action',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']

        }
    ])
    .then(({action}) => {
        if (action === 'Add Engineer') {
            getEngineer();
        } else if (action === 'Add Intern') {
            getIntern();
        } else {
            console.log('Finished building team');
            generatePage();
            
            
        }
    })
}

const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter Manager's office number:"
        }
    ])
}

const getEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Engineer's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Engineer's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Engineer's email:"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter Engineer's GitHub username:"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        engineers.push(engineer);
    }).then(promptMenu);

}

const getIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Intern's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Intern's employee number:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Intern's email:"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's school:"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        interns.push(intern);

    }).then(promptMenu);
}

getManager()
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
    })
    .then(promptMenu)

const generatePage = function() {

    const pageHTML = generateHtml(employees, engineers, interns);

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw new Error(err);

        console.log('Page Created.');
    })
}