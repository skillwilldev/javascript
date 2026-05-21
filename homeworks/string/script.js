// const studentsForEach = [
//   { name: 'Alice', scores: [85, 92, 78] },
//   { name: 'Bob', scores: [90, 88, 95] },
//   { name: 'Charlie', scores: [70, 65, 80] },
//   { name: 'Diana', scores: [95, 98, 100] },
// ];

// let passCount = 0;
// let failCount = 0;

// studentsForEach.forEach(function (student) {
//   let sum = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum += student.scores[i];
//   }
//   const avg = sum / student.scores.length;
//   const status = avg >= 80 ? 'Passed' : 'Failed';
//   if (status === 'Passed') passCount++;
//   else failCount++;
//   console.log(
//     Student: ${student.name} | Average: ${avg.toFixed(1)} | Status: ${status}
//   );
// });

// console.log(Total Passed: ${passCount}, Total Failed: ${failCount});


// ///////////////////////////////////////
// // 5. String Methods
// ///////////////////////////////////////

// const airline = 'Georgian Airways';
// const plane = 'A320';

// // length — string length
// console.log(airline.length); // 16
// console.log('Hello'.length); // 5

// // indexOf / lastIndexOf — position of a character or substring
// console.log(airline.indexOf('o')); // 2 (first 'o')
// console.log(airline.lastIndexOf('a')); // 14 (last 'a')
// console.log(airline.indexOf('Airways')); // 9
// console.log(airline.indexOf('xyz')); // -1 (not found)

// // slice() — extracts a portion of the string (returns new string, original unchanged)
// console.log(airline.slice(9)); // 'Airways' (from index 9 to the end)
// console.log(airline.slice(0, 8)); // 'Georgian' (from 0 to 8, 8 not included)
// console.log(airline.slice(-7)); // 'Airways' (last 7 characters)
// console.log(airline.slice(1, -1)); // 'eorgian Airway' (without first and last)

// // toUpperCase / toLowerCase — change case
// console.log(airline.toUpperCase()); // 'GEORGIAN AIRWAYS'
// console.log(airline.toLowerCase()); // 'georgian airways'

// // Practical example: formatting a name
// const passenger = '  gEoRgE  ';
// const formatted =
//   passenger.trim().toLowerCase().slice(0, 1).toUpperCase() +
//   passenger.trim().toLowerCase().slice(1);
// console.log(formatted); // 'George'

// // trim() — removes whitespace from the beginning and end
// console.log('  Hello  '.trim()); // 'Hello'
// console.log('  Hello  '.trimStart()); // 'Hello  '
// console.log('  Hello  '.trimEnd()); // '  Hello'

// // replace() — replaces content in a string
// const priceGe = '350,99$';
// const priceUS = priceGe.replace(',', '.');
// console.log(priceUS); // '350.99$'

// // replace only changes the first match
// const announcement = 'Please exit through gate 23! Gate 23!';
// console.log(announcement.replace('gate', 'door'));
// // 'Please exit through door 23! Gate 23!' — only the first one changed

// // replaceAll — replaces all matches
// console.log(announcement.replaceAll('23', '45'));
// // 'Please exit through gate 45! Gate 45!'

// // includes / startsWith / endsWith — checks (returns boolean)
// console.log(airline.includes('Airways')); // true
// console.log(airline.includes('xyz')); // false
// console.log(airline.startsWith('Geo')); // true
// console.log(airline.endsWith('ways')); // true

// // Practical example: baggage check
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('weapon')) {
//     console.log('You are NOT allowed to board!');
//   } else {
//     console.log('Welcome aboard! Have a nice flight!');
//   }
// };

// checkBaggage('Laptop, food, book');
// checkBaggage('Socks, knife, sunglasses');

// // split() — splits a string into an array
// console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
// console.log('Jonas Schmedtmann'.split(' ')); // ['Jonas', 'Schmedtmann']

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName); // 'Jonas'
// console.log(lastName); // 'Schmedtmann'

// // join() — joins an array into a string (opposite of split)
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join(' - ')); // 'Fire - Air - Water'
// console.log(elements.join(', ')); // 'Fire, Air, Water'

// // repeat() — repeats a string
// console.log('ha '.repeat(3)); // 'ha ha ha '

// // Practical example
// const planesInLine = function (n) {
//   console.log(There are ${n} planes in line ${'✈️'.repeat(n)});
// };
// planesInLine(3);
// planesInLine(7);

// // padStart / padEnd — pads a string to a desired length
// const message = 'Hello';
// console.log(message.padStart(10, '')); // '**Hello'
// console.log(message.padEnd(10, '-')); // 'Hello-----'
// console.log(message.padStart(10, '').padEnd(15, '')); // '**Hello**'

// // Practical example: masking a credit card number
// const maskCreditCard = function (number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(4337846386647890)); // '******7890'
// console.log(maskCreditCard('3345622289901287')); // '******1287'


/*
Create a function 'processText' that takes a sentence and performs
the following string transformations:

1. Trim whitespace from both ends
2. Convert to lowercase
3. Replace all occurrences of 'javascript' with 'JS'
4. Capitalize the first letter of the result
5. Add the character count at the end: " (X chars)"
6. Return the final string

Test data:
'  I Love JAVASCRIPT and javascript is Great!  '
→ 'I love JS and JS is great! (27 chars)'
   I love JS and JS is great!

'   JAVASCRIPT   '
→ 'JS (2 chars)'

Hint: Use trim(), toLowerCase(), replaceAll(), slice(), and length
*/

const capitalize = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function data(str) {
    const result = capitalize(str.trim().toLowerCase().replaceAll('javascript', 'JS'));
    return result + ` (${result.length} chars)`;
}

console.log(data('   JAVASCRIPT   '));
console.log(data('  I Love JAVASCRIPT and javascript is Great!  '));
