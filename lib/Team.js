const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.members = [];
    }

    getTeam() {
        inquirer.prompt([
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
        ])
        .then(manager => {
            console.log(manager);
        });
    }
}

module.exports = Team;