class Employee {

    constructor(name = '', id = Number, email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getEmail = () => this.email;

    getRole = () => 'Employee';
}



module.exports = Employee;