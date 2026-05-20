////////////////////////////////////
// Coding Challenge: forEach
////////////////////////////////////

/*
You have an array of student objects:
const students = [
  { name: 'Alice', scores: [85, 92, 78] },
  { name: 'Bob', scores: [90, 88, 95] },
  { name: 'Charlie', scores: [70, 65, 80] },
  { name: 'Diana', scores: [95, 98, 100] },
];

1. Use forEach to iterate over each student
2. For each student, calculate their average score (use a for loop to sum the scores)
3. Determine their status: average >= 80 is "Passed", otherwise "Failed"
4. Log: "Student: Alice | Average: 85.0 | Status: Passed"
5. At the end, log how many students passed and how many failed

Hint: You can use a counter variable outside the forEach to track pass/fail counts.
Use a for loop inside forEach to calculate the sum of scores.
*/


const students = [
    { name: 'Alice', scores: [10, 10, 10] },
    { name: 'Bob', scores: [90, 90, 90] },
    { name: 'Charlie', scores: [70, 65, 80] },
    { name: 'Diana', scores: [20, 20, 20] },
];


let passed = 0;
students.forEach((student) => {
    let sum = 0;
    student.scores.forEach((item) => {
        sum += item;
    });
    let everage = Math.trunc(sum / student.scores.length);

    if (everage >= 80) {
        console.log(`average = ${everage} ${student.name} :Passed`);
        passed++;
    } else {
        console.log(`average = ${everage}  ${student.name} otherwise Failed`);
    }
})

console.log('---------------');
console.log(`passed ${passed} students`);



const passenger = "geoRgE";
console.log(passenger.indexOf('R'));
console.log(passenger.lastIndexOf('g'));
console.log(passenger.slice(1, -1));
console.log(passenger.slice(0, 3));
console.log(passenger.slice(4));
console.log(passenger.slice(-5));
console.log(passenger.toLowerCase());
console.log(passenger.toUpperCase());