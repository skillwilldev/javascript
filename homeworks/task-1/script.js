let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);


const markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark:", BMIMark);
console.log("BMI John:", BMIJohn);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);