//Challenge #1 — Booking System (Default Parameters)
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log('Создано бронирование:', booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 3);
createBooking('LH123', 5, 500);
createBooking('LH123', undefined, 1000);

console.log('\nИтоговый массив бронирований:', bookings);


////////////////////////////////////////////////////////////////////////////
//Challenge #2 — Data Transformer (Higher-Order Functions & Callbacks)
// 1. Main transformer function
const transformer = function (str, fn) {
    console.log(`--- Applying transformation: ${fn.name} ---`);
    console.log(`Original: "${str}"`);
    console.log(`Result: "${fn(str)}"`);
};

// 2. Callback: First word in uppercase
const toUpperFirst = function (str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

// 3. Callback: Remove spaces
const removeSpaces = function (str) {
    return str.split(' ').join('');
};

// 4. Callback: Count words
const countWords = function (str) {
    const wordCount = str.split(' ').length;
    return `${wordCount} words`;
};

// Test string
const testString = 'javascript is absolutely amazing';

// 5. Calls with named callbacks
transformer(testString, toUpperFirst);
transformer(testString, removeSpaces);
transformer(testString, countWords);

// 6. Call with an inline anonymous arrow function (reverse string)
transformer(testString, (str) => str.split('').reverse().join(''));

//////////////////////////////////////////////////////////////
//Challenge #3 — Greeting Generator (Functions Returning Functions)
const makeGreeter = function (greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    };
};

const greeterHello = makeGreeter('Hello');
const greeterHey = makeGreeter('Hey');
const greeterGoodMorning = makeGreeter('Good morning');

greeterHello('Jonas');
greeterHello('Sarah');
greeterHey('Steven');
greeterHey('Anna');
greeterGoodMorning('Peter');

// 4. Call in a single line (double parentheses)
makeGreeter('Hi')('Jonas');

// 5. Single-line arrow version
const makeGreeterArrow = (greeting) => (name) => console.log(`${greeting}, ${name}!`);

// 6. Testing the arrow function
console.log('\n--- Checking the arrow version ---');
const arrowHello = makeGreeterArrow('Hello');
arrowHello('Jonas');
makeGreeterArrow('Hi')('Jonas');