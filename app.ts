function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}

const combinedAges = combine(44, 50, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('44', '50', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Aarron', 'Tammy', 'as-text');
console.log(combinedNames);