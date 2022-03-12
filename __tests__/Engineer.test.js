const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('John',1,'john@test.com','github');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('john@test.com');
    expect(engineer.github).toBe('github');
});

test('Engineer getName method returns the Engineer name', () => {
    const engineer = new Engineer('Kevin',2,'Kevin@test.com');

    expect(engineer.getName()).toBe('Kevin');
});

test('Engineer getId method returns the Engineer id', () => {
    const engineer = new Engineer('Avi',3,'Avi@test.com');

    expect(engineer.getId()).toBe(3);
});

test('Engineer getEmail method returns the Engineer email', () => {
    const engineer = new Engineer('Ronald',4,'Ronald@test.com');

    expect(engineer.getEmail()).toBe('Ronald@test.com');
});

test('Engineer getRole method returns Engineer', () => {
    const engineer = new Engineer('Terry',5,'Terry@test.com');

    expect(engineer.getRole()).toBe('Engineer');
});

test('Engineer getGithub method returns github', () => {
    const engineer = new Engineer('Everett',6,'Everett@test.com','github');

    expect(engineer.getGithub()).toBe('github');
});