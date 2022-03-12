const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('John',1,'john@test.com',123456789);

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('john@test.com');
    expect(manager.officeNumber).toBe(123456789);
});

test('Manager getName method returns the Manager name', () => {
    const manager = new Manager('Kevin',2,'Kevin@test.com');

    expect(manager.getName()).toBe('Kevin');
});

test('Manager getId method returns the Manager id', () => {
    const manager = new Manager('Avi',3,'Avi@test.com');

    expect(manager.getId()).toBe(3);
});

test('Manager getEmail method returns the Manager email', () => {
    const manager = new Manager('Ronald',4,'Ronald@test.com');

    expect(manager.getEmail()).toBe('Ronald@test.com');
});

test('Manager getRole method returns Manager', () => {
    const manager = new Manager('Terry',5,'Terry@test.com');

    expect(manager.getRole()).toBe('Manager');
});

test('Manager getOfficeNumber method returns officeNumber', () => {
    const manager = new Manager('Everett',6,'Everett@test.com',123456789);

    expect(manager.getOfficeNumber()).toBe(123456789);
});