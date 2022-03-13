const Employee = require('./Employee');

// class extends Employee for access common properties
class Intern extends Employee {
    constructor(name,id,email,school) {
        // super is used to access base class constructor
        super(name,id,email);

        this.school = school;
    }

    // helper functions to access properties. getRole here overwrites base class method
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;