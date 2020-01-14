// const names: Array<string> = []; // string[]
// //names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     //data.split(' ');
// });



function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Aarron', hobbies: ['Work']}, {age: 44});
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element : T): [T, string] {
    let descriptionText = 'Got no value.';

    if(element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Aarron' }, 'name'));