"use strict";
var _a, _b;
const e1 = {
    name: "Aarron",
    privileges: ["create-server"],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Aarron', ' Szalacinski');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Aarron',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_b = (_a = fetchedUserData) === null || _a === void 0 ? void 0 : _a.job) === null || _b === void 0 ? void 0 : _b.title);
//# sourceMappingURL=app.js.map