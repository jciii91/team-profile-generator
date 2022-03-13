const Employee = require('./Employee');

// class extends Employee for access common properties
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        // super is used to access base class constructor
        super(name,id,email);

        this.officeNumber = officeNumber;
    }

    // helper functions to access properties. getRole here overwrites base class method
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;