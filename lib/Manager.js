const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name = '', id = Number, email = '', officeNumber = ''){

    super(name, id, email);
    this.officeNumber = officeNumber;

    }

    getRole = () => 'Manager';
}

module.exports = Manager;