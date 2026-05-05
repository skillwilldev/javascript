const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function(birthYear) {
    //     return 2026 - birthYear
    // }
    // calcAge: function() {
    //     console.log('this',this);
    //     return 2026 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2026 - this.birthYear;
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${(this.hasDriversLicense) ? 'a' : 'no'} driver's license`;
    }
}

console.log(jonas.getSummary());


// "Jonas is a 46-year old teacher, and he has a driver's license"
// სახელი
// ასაკი
// პროფესია
// a/no
// a ან no იმის მიხედვით აქვს თუ არა მარტვის მოწმობა


///////////////////////////////////////

// --------------------------------------------------------------------------------------------




// 1.დაწერე პროგრამა, რომელიც დაითვლის 1-დან $N$-მდე ყველა მთელი რიცხვის ჯამს. მომხმარებელმა უნდა შეიყვანოს $N$.
function calcSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(calcSum(5));









// 2.  მოცემულია რიცხვების მასივი: [5, 12, 8, 20, 3, 15, 7]. დაწერე კოდი, რომელიც ამ მასივიდან მხოლოდ 10-ზე მეტ რიცხვებს დაბეჭდავს.
// 3. მოცემულია მასივი: [1, 2, 3, 4, 5, 6, 7, 8, 9]. პროგრამამ უნდა დაითვალოს, რამდენი ლუწი რიცხვია მასივში და რამდენი კენტი.
// ორი ამოცანა ერთ ფუნქციაშია
function dualCalc(arr) {
    if (!Array.isArray(arr)) {
        return 'array is not present';
    }

    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }

        if (arr[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    return `even numbers count: ${even}, odd numbers count: ${odd}`;
}
console.log(dualCalc([10, 12, 7, 7, 15, 3]));



// ბონუს დავალება 
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/
const mark = {
    fullName: 'Mark Miller',
    mass: 75,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 88,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
}

