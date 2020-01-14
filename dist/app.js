"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Aarron', hobbies: ['Work'] }, { age: 44 });
console.log(mergedObj);
//# sourceMappingURL=app.js.map