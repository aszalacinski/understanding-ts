"use strict";
class Person {
    constructor(n) {
        this.age = 44;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Aarron');
user1.greet(`Hi there, I am`);
console.log(user1);
//# sourceMappingURL=app.js.map