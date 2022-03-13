const Employee = require('./Employee');

// class extends Employee for access common properties
class Engineer extends Employee {
    constructor(name,id,email,github) {
        // super is used to access base class constructor
        super(name,id,email);

        this.github = github;
    }

    // helper functions to access properties. getRole here overwrites base class method
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;