const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var newTeam = [];

function getManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name? (Required)',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the manager\'s employee ID? (Required)',
            validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email? (Required)',
            validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number? (Required)',
            validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;
            }
            }
        },
    ]);
}

function getEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name? (Required)',
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the engineer\'s employee ID? (Required)',
            validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email? (Required)',
            validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github username? (Required)',
            validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
            }
        },
    ])
    .then(engineer => {
        const {name:name,employeeID:employeeID,email:email,github:github} = engineer;
        tempEng = new Engineer(name,employeeID,email,github);
        newTeam.push(tempEng);
    })
    .then(() => {
        return inquirer.prompt(
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do now?',
                choices: ['Add an engineer','Add an intern','Finish building your team']
            }
        )
    })
    .then(option => {
        if (option.option == 'Add an engineer') {
            return getEngineer();
        } else if (option.option == 'Add an intern') {
            return 'I';
        } else {
            return 'F';
        }
    })
}

function buildTeam(manager) {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do now?',
            choices: ['Add an engineer','Add an intern','Finish building your team']
        }
    )
    .then(option => {
        const {name:name,employeeID:employeeID,email:email,officeNumber:officeNumber} = manager;
        tempMan = new Manager(name,employeeID,email,officeNumber);
        newTeam.push(tempMan);
        if (option.option == 'Add an engineer') {
            return getEngineer();
        } else if (option.option == 'Add an intern') {
            return 'I';
        } else {
            return 'F';
        }
    });
}

// const {name:name,employeeID:employeeID,email:email,officeNumber:officeNumber} = answers;
// return new Manager(name,employeeID,email,officeNumber);

getManager()
    .then(manager => {
        return buildTeam(manager);
    })
    .then (() => {
        console.log(newTeam);
    });