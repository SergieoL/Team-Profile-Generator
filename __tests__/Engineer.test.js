const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {

    const engineer = new Engineer('Serg', 1, 'sergy@gmail.com', 'SergieoL');

    expect(engineer.name).toBe('Serg');
    expect(engineer.id).toBeGreaterThanOrEqual(0);
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.gitHub).toEqual(expect.stringContaining('Sergieo'));

})

test('getRole() returning "Engineer"', () => {

    const engineer = new Engineer('Serg', 1, 'sergy@gmail.com', 'SergieoL');

    expect(engineer.getRole()).toEqual('Engineer');
})