const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern('John',1,'john@test.com','School');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('john@test.com');
    expect(intern.school).toBe('School');
});

test('Intern getName method returns the Intern name', () => {
    const intern = new Intern('Kevin',2,'Kevin@test.com');

    expect(intern.getName()).toBe('Kevin');
});

test('Intern getId method returns the Intern id', () => {
    const intern = new Intern('Avi',3,'Avi@test.com');

    expect(intern.getId()).toBe(3);
});

test('Intern getEmail method returns the Intern email', () => {
    const intern = new Intern('Ronald',4,'Ronald@test.com');

    expect(intern.getEmail()).toBe('Ronald@test.com');
});

test('Intern getRole method returns Intern', () => {
    const intern = new Intern('Terry',5,'Terry@test.com');

    expect(intern.getRole()).toBe('Intern');
});

test('Intern getOfficeNumber method returns officeNumber', () => {
    const intern = new Intern('Everett',6,'Everett@test.com','School');

    expect(intern.getSchool()).toBe('School');
});