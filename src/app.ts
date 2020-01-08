class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

class AccountDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');

  }

  addReport(text: string) {
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

// const accountingCopy = { name: 'Dummy', describe: accounting.describe };

// accountingCopy.describe();
