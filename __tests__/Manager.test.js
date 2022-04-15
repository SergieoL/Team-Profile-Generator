const Manager = require('../lib/Manager');

test('creates a Manger object', () => {
    
    const manager = new Manager('Serg', 1, 'sergie@gmail.com', '808-381-5770');

    expect(manager.name).toBe('Serg');
    expect(manager.id).toBeGreaterThanOrEqual(0);
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.stringContaining('808'));
})

test(' return Manager as role', () => {

    const manager = new Manager('Serg', 1, 'sergie@gmail.com', '808-381-5770');


    expect(manager.getRole()).toEqual('Manager');
})