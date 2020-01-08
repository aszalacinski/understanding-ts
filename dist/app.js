"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT Deparment");
        this.admins = admins;
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "Aarron") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Eric');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Aarron"]);
it.addEmployee("Aarron");
it.addEmployee("Tammy");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounts = new AccountDepartment("d2", []);
accounts.mostRecentReport = "Year End Report";
accounts.addReport("Something went wrong");
console.log(accounts.mostRecentReport);
accounts.addEmployee("Aarron");
accounts.addEmployee("Tammy");
accounts.printReports();
accounts.printEmployeeInformation();
//# sourceMappingURL=app.js.map