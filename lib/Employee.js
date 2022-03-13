class Employee {
    //constructor takes arguments to intialize properties
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // helper methods to return object properties
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;