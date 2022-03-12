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

test('Employee getId method returns the Employee id', () => {
    const employee = new Employee('Avi',3,'Avi@test.com');

    expect(employee.getId()).toBe(3);
});

test('Employee getEmail method returns the Employee email', () => {
    const employee = new Employee('Ronald',4,'Ronald@test.com');

    expect(employee.getEmail()).toBe('Ronald@test.com');
});

test('Employee getRole method returns Employee', () => {
    const employee = new Employee('Terry',5,'Terry@test.com');

    expect(employee.getRole()).toBe('Employee');
});