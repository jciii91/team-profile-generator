const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('John',1,'john@test.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('john@test.com');
});

test('Employee getName method returns the Employee name', () => {
    const employee = new Employee('Kevin',2,'Kevin@test.com');

    expect(employee.getName()).toBe('Kevin');
});