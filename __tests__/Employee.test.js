const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('John');

    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('john@test.com');
});