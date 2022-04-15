const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name = '', id = Number, email = '', gitHub = ''){

    super(name, id, email);
    this.gitHub = gitHub;

    }

    getRole = () => 'Engineer';
}

module.exports = Engineer;