const Intern = require('../lib/Intern');

test('creates an Intern object', () => {

    const intern = new Intern('Serg', 1, 'sergy@gmail.com', 'Texas State');

    expect(intern.name).toBe('Serg');
    expect(intern.id).toBeGreaterThanOrEqual(0);
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.stringContaining('Texas'));

})

test('return Intern as role', () => {

    const intern = new Intern('Serg', 1, 'sergy@gmail.com', 'Texas State');

    expect(intern.getRole()).toEqual('Intern');
})