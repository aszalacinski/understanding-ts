"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT Deparment");
        this.admins = admins;
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("d1", ['Aarron']);
it.addEmployee("Aarron");
it.addEmployee("Tammy");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounts = new AccountDepartment('d2', []);
accounts.addReport('Something went wrong');
accounts.printReports();
//# sourceMappingURL=app.js.map