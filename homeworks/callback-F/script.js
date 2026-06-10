'use strict';
function processArray(arr, callback) {
    const result = [];

    for (const item of arr) {
        result.push(callback(item));
    }

    return result;
}
///////////////////////////////////////////
function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function isEven(num) {
    return num % 2 === 0;
}
////////////////////////////////////////////
const data = [1, 2, 3, 4, 5];

console.log(processArray(data, double));
console.log(processArray(data, square));
console.log(processArray(data, isEven));


/////////////////////////////////////////////
// BONUS

function pipeline(value, ...callbacks) {
    let result = value;

    for (const callback of callbacks) {
        result = callback(result);
    }

    return result;
}

console.log(pipeline(5, double, square));