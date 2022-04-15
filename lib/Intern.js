const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name = '', id = Number, email = '', school = '') {

    super(name, id, email);
    this.school = school;

    }

    getRole = () => 'Intern';
}

module.exports = Intern;