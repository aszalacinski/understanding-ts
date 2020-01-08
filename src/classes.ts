abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT Deparment");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Deparment - ID: " + this.id);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID:" + this.id);
  }

  addEmployee(name: string) {
    if (name === "Aarron") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Eric");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Aarron"]);

it.addEmployee("Aarron");
it.addEmployee("Tammy");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounts = new AccountDepartment("d2", []);
const accounts = AccountDepartment.getInstance();

accounts.mostRecentReport = "Year End Report";
accounts.addReport("Something went wrong");

console.log(accounts.mostRecentReport);

accounts.addEmployee("Aarron");
accounts.addEmployee("Tammy");
accounts.describe();
// accounts.printReports();
// accounts.printEmployeeInformation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// accountingCopy.describe();
