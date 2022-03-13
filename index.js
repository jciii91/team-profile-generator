// required resources to run application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const { writeFile, copyFile } = require('./src/generateSite');

// array to hold the team being input
var newTeam = [];

// receives user input for Manager information
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

// receives user input for Engineer information
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
    // uses inputs to make an object using the Engineer class
    .then(engineer => {
        const {name:name,employeeID:employeeID,email:email,github:github} = engineer;
        tempEng = new Engineer(name,employeeID,email,github);
        newTeam.push(tempEng);
    })
    // asks user what they would like to do next
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
        return chooseOption(option);
    })
}

// receives user input for Intern information
function getIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name? (Required)',
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
            message: 'What is the intern\'s employee ID? (Required)',
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
            message: 'What is the intern\'s email? (Required)',
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
            name: 'school',
            message: 'What school does the intern attend? (Required)',
            validate: school => {
            if (school) {
                return true;
            } else {
                console.log('Please enter a school!');
                return false;
            }
            }
        },
    ])
    // uses inputs to make an object using the Intern class
    .then(intern => {
        const {name:name,employeeID:employeeID,email:email,school:school} = intern;
        tempInt = new Intern(name,employeeID,email,school);
        newTeam.push(tempInt);
    })
    // asks user what they would like to do next
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
        return chooseOption(option);
    })
}

// function to direct app based on user selection
function chooseOption(option) {
    if (option.option == 'Add an engineer') {
        return getEngineer();
    } else if (option.option == 'Add an intern') {
        return getIntern();
    } else {
        return 'F';
    }
}

// takes the info for the Mananger and makes an object using the Manager class
function buildTeam(manager) {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do now?',
            choices: ['Add an engineer','Add an intern','Finish building your team']
        }
    )
    // adds Manager as the first memeber of the team
    .then(option => {
        const {name:name,employeeID:employeeID,email:email,officeNumber:officeNumber} = manager;
        tempMan = new Manager(name,employeeID,email,officeNumber);
        newTeam.push(tempMan);
        return chooseOption(option);
    });
}

// gets the manager info
// then asks the user for any further info for additional team members
// then takes the team array and makes the HTML
// then the files are written and copied into dist
getManager()
    .then(manager => {
        return buildTeam(manager);
    })
    .then (() => {
        return generatePage(newTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });