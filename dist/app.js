"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Aarron', hobbies: ['Work'] }, { age: 44 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Aarron' }, 'name'));
//# sourceMappingURL=app.js.map