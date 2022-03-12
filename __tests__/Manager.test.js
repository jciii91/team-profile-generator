const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('John',1,'john@test.com',123456789);

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('john@test.com');
    expect(manager.officeNumber).toBe(123456789);
});