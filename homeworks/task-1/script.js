let massMark = 90;
let heightMark =1.9;

let massJohn = 80;
let heightJohn = 1.75;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);


const markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark:", BMIMark);
console.log("BMI John:", BMIJohn);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);