const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    
    const employee = new Employee('Serg', 1, 'sergie@gmail.com');

    expect(employee.name).toBe('Serg');
    expect(employee.id).toBeGreaterThanOrEqual(0);
    expect(employee.email).toEqual(expect.stringContaining('@'));
})

test('returns employee email', () => {

    const employee = new Employee('Sergy', 2, 'sergy@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));


})

test('returns Employee', () => {

    const employee = new Employee('Sergy', 3, 'sergy@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})

