////////////////////////////////////
// ობიექტზე ორიენტირებული პროგრამირება (OOP)
// სავარჯიშო ჩელენჯები - მხოლოდ პირობები
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ცხოველთა სამეფო
// (Constructor ფუნქციები + new ოპერატორი)

/*
აწყობთ მარტივ ცხოველთა რეესტრს ზოოპარკისთვის. თითოეული ცხოველი
უნდა იყოს წარმოდგენილი ობიექტის სახით, რომელიც შექმნილია constructor ფუნქციით.

1. შექმენით constructor ფუნქცია 'Animal', რომელიც იღებს სამ პარამეტრს:
   species, name და sound
2. კონსტრუქტორის შიგნით, მიანიჭეთ სამივე პარამეტრი, როგორც თვისებები
   ახალ ობიექტს 'this'-ის გამოყენებით
3. შექმენით სამი ცხოველის ინსტანცია 'new' ოპერატორის გამოყენებით:
   - ძაღლი სახელად 'Rex', რომელიც ამბობს 'Woof'
   - კატა სახელად 'Whiskers', რომელიც ამბობს 'Meow'
   - თუთიყუში სახელად 'Polly', რომელიც ამბობს 'Squawk'
4. დალოგეთ სამივე ცხოველის ობიექტი კონსოლში
5. გამოიყენეთ 'instanceof' იმის დასადასტურებლად, რომ თითოეული ცხოველი
   არის Animal-ის ინსტანცია, და დალოგეთ შედეგები
6. შექმენით ჩვეულებრივი ობიექტი { species: 'Fish', name: 'Nemo', sound: 'Blub' }
   და შეამოწმეთ არის თუ არა ის Animal-ის instanceof (უნდა იყოს false!)
7. კომენტარში ახსენით ის 4 ნაბიჯი, რომლებიც კულისებში ხდება, როცა
   ფუნქციას 'new'-ით იძახებთ

სატესტო მონაცემები: Dog 'Rex' 'Woof', Cat 'Whiskers' 'Meow', Parrot 'Polly' 'Squawk'

მინიშნება: Constructor ფუნქციის სახელები კონვენციით დიდი ასოით იწყება
მინიშნება: Arrow ფუნქციები არ შეიძლება გამოყენებულ იქნას კონსტრუქტორებად,
          რადგან მათ არ აქვთ საკუთარი 'this'

წარმატებები 😀
*/


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - პროტოტიპის ძალა
// (პროტოტიპები + პროტოტიპის ჯაჭვი)

/*
იკვლევთ როგორ მუშაობს პროტოტიპები JavaScript-ში, აწყობთ
'Smartphone' კონსტრუქტორს და მის პროტოტიპს ამაგრებთ საზიარო მეთოდებს.

1. შექმენით constructor ფუნქცია 'Smartphone', რომელიც იღებს brand, model
   და batteryLevel (რიცხვი 0-დან 100-მდე)
2. დაამატეთ მეთოდი 'call' Smartphone.prototype-ზე, რომელიც იღებს კონტაქტის სახელს
   და ლოგავს: "Calling <contact> from <brand> <model>..."
3. დაამატეთ მეთოდი 'checkBattery' Smartphone.prototype-ზე, რომელიც ლოგავს:
   "Battery at <batteryLevel>%" თუ 20-ზე მეტია, ან "Low battery! Only <batteryLevel>% left!" თუ 20 ან ნაკლებია
4. შექმენით ორი ინსტანცია: ('Apple', 'iPhone 15', 85) და ('Samsung', 'Galaxy S24', 15)
5. გამოიძახეთ 'call' მეთოდი ორივე ტელეფონზე სხვადასხვა კონტაქტის სახელით
6. გამოიძახეთ 'checkBattery' ორივე ტელეფონზე და დააკვირდით განსხვავებულ შეტყობინებებს
7. გამოიყენეთ 'hasOwnProperty' იმის საჩვენებლად, რომ 'brand' არის თითოეული
   ინსტანციის საკუთარი თვისება, მაგრამ 'call' არ არის (რადგან ის პროტოტიპზე ცხოვრობს)
8. დალოგეთ phone1.__proto__ და გადაამოწმეთ, რომ ის უდრის Smartphone.prototype-ს ===-ით

სატესტო მონაცემები: ტელეფონი 1: 'Apple', 'iPhone 15', 85  |  ტელეფონი 2: 'Samsung', 'Galaxy S24', 15

მინიშნება: პროტოტიპზე მეთოდები საზიაროა, არა კოპირებული თითოეულ ინსტანციაზე.
          ეს მეხსიერების ეფექტურია, რადგან ყველა ინსტანცია ერთსა და იმავე ფუნქციას მიმართავს.
მინიშნება: hasOwnProperty აბრუნებს true-ს მხოლოდ ობიექტზე პირდაპირ განთავსებული თვისებებისთვის

წარმატებები 😀
*/


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - სატრანსპორტო ქარხანა
// (Constructor + პროტოტიპები კომბინირებული)

/*
აწყობთ სატრანსპორტო რბოლის სიმულატორს. შექმენით სატრანსპორტო საშუალებები
constructor ფუნქციით, დაამატეთ ქცევა პროტოტიპების მეშვეობით და გამართეთ რბოლა!

1. შექმენით constructor ფუნქცია 'Vehicle' თვისებებით: make, model
   და speed (საწყისი სიჩქარე კმ/სთ-ში)
2. დაამატეთ 'accelerate' მეთოდი Vehicle.prototype-ზე, რომელიც ზრდის სიჩქარეს
   20-ით და ლოგავს: "<make> <model> accelerates to <speed> km/h"
3. დაამატეთ 'brake' მეთოდი Vehicle.prototype-ზე, რომელიც ამცირებს სიჩქარეს 15-ით
   (მაგრამ არასდროს 0-ზე ქვემოთ) და ლოგავს: "<make> <model> brakes to <speed> km/h"
4. დაამატეთ 'status' მეთოდი Vehicle.prototype-ზე, რომელიც ლოგავს:
   "<make> <model> is going <speed> km/h"
5. შექმენით სამი სატრანსპორტო საშუალება:
   - 'Toyota', 'Supra', 0
   - 'BMW', 'M3', 0
   - 'Tesla', 'Model S', 0
6. გაასიმულირეთ მინი რბოლა: თითოეულ მანქანას დააჩქარეთ 3-ჯერ, შემდეგ ერთხელ
   დაამუხრუჭეთ, შემდეგ გამოიძახეთ status თითოეულზე
7. გადაამოწმეთ პროტოტიპის ჯაჭვი: დალოგეთ vehicle.__proto__ (უნდა იყოს Vehicle.prototype),
   vehicle.__proto__.__proto__ (უნდა იყოს Object.prototype) და
   vehicle.__proto__.__proto__.__proto__ (უნდა იყოს null)

სატესტო მონაცემები: Toyota Supra, BMW M3, Tesla Model S - ყველა იწყებს 0 კმ/სთ-დან

მინიშნება: დამუხრუჭებისას გამოიყენეთ Math.max(0, this.speed - 15) უარყოფითი სიჩქარის თავიდან ასაცილებლად
მინიშნება: პროტოტიპის ჯაჭვი მიდის: ინსტანცია -> Constructor.prototype -> Object.prototype -> null

წარმატებები 😀
*/


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - სტატიკური vs ინსტანციის მეთოდები
// (სტატიკური მეთოდები)

/*
უნდა ააწყოთ 'MathHelper' უტილიტა, რომელიც აჩვენებს განსხვავებას
სტატიკურ მეთოდებს (კონსტრუქტორს ეკუთვნის) და ინსტანციის მეთოდებს
(ინსტანციებისთვის ხელმისაწვდომია პროტოტიპის მეშვეობით) შორის.

1. შექმენით constructor ფუნქცია 'MathHelper', რომელიც იღებს ერთ პარამეტრს
   'value' და ინახავს მას, როგორც თვისებას
2. დაამატეთ სტატიკური მეთოდი 'isEven' თავად MathHelper-ზე (არა პროტოტიპზე),
   რომელიც იღებს რიცხვს და აბრუნებს true-ს თუ ლუწია, false-ს წინააღმდეგ შემთხვევაში
3. დაამატეთ სტატიკური მეთოდი 'celsiusToFahrenheit' თავად MathHelper-ზე, რომელიც
   იღებს ცელსიუსის მნიშვნელობას და აბრუნებს ფარენჰაიტის ექვივალენტს (ფორმულა: C * 9/5 + 32)
4. დაამატეთ სტატიკური მეთოდი 'factorial' თავად MathHelper-ზე, რომელიც იღებს რიცხვს
   და აბრუნებს მის ფაქტორიალს (მაგ., 5! = 5 * 4 * 3 * 2 * 1 = 120).
   გამოიყენეთ for ციკლი.
5. დაამატეთ ინსტანციის მეთოდი 'double' MathHelper.prototype-ზე, რომელიც აბრუნებს
   this.value * 2
6. დაამატეთ ინსტანციის მეთოდი 'isPositive' MathHelper.prototype-ზე, რომელიც აბრუნებს
   true-ს თუ this.value > 0
7. შექმენით ინსტანცია: new MathHelper(7). გამოიძახეთ ინსტანციის მეთოდები მასზე.
8. გამოიძახეთ სტატიკური მეთოდები პირდაპირ MathHelper-ზე (არა ინსტანციაზე).
   შემდეგ სცადეთ სტატიკური მეთოდის გამოძახება ინსტანციაზე და აჩვენეთ, რომ ვერ მუშაობს.

სატესტო მონაცემები: სტატიკური: isEven(4), isEven(7), celsiusToFahrenheit(100), factorial(5)
           ინსტანციის: new MathHelper(7) -> double(), isPositive()

მინიშნება: სტატიკური მეთოდები პირდაპირ კონსტრუქტორზე ემატება: MathHelper.isEven = function() {}
მინიშნება: ინსტანციის მეთოდები პროტოტიპზე ემატება: MathHelper.prototype.double = function() {}
მინიშნება: სტატიკური მეთოდები 'this'-ს იყენებენ კონსტრუქტორზე მისანიშნებლად, არა ინსტანციებზე

წარმატებები 😀
*/


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - კლასით რეფაქტორინგი
// (ES6 კლასები)

/*
აიღეთ Vehicle კონსტრუქტორი ჩელენჯი #3-დან და გადააკეთეთ ES6 კლასად.
შემდეგ დაამტკიცეთ, რომ ES6 კლასები მხოლოდ "სინტაქსური შაქარია" constructor
ფუნქციების თავზე — შიდა პროტოტიპის მექანიზმი იდენტურია.

1. შექმენით ES6 კლასი 'VehicleCl' კონსტრუქტორით, რომელიც იღებს make,
   model და speed
2. დაამატეთ 'accelerate' მეთოდი კლასის სხეულში, რომელიც ზრდის სიჩქარეს
   20-ით და ლოგავს: "<make> <model> accelerates to <speed> km/h"
3. დაამატეთ 'brake' მეთოდი კლასის სხეულში, რომელიც ამცირებს სიჩქარეს 15-ით
   (არასდროს 0-ზე ქვემოთ) და ლოგავს: "<make> <model> brakes to <speed> km/h"
4. დაამატეთ 'status' მეთოდი კლასის სხეულში, რომელიც ლოგავს:
   "<make> <model> is going <speed> km/h"
5. შექმენით ორი ინსტანცია: ('Honda', 'Civic', 0) და ('Ford', 'Mustang', 0)
6. ორივე მანქანა დააჩქარეთ ორჯერ, ერთხელ დაამუხრუჭეთ, შემდეგ დაბეჭდეთ სტატუსი
7. გადაამოწმეთ, რომ კლასი კულისებში პროტოტიპებით მუშაობს:
   - დალოგეთ civic.__proto__ === VehicleCl.prototype (უნდა იყოს true)
   - დალოგეთ, რომ 'accelerate' არ არის ინსტანციის საკუთარი თვისება
     (hasOwnProperty უნდა დააბრუნოს false)
   - დალოგეთ, რომ 'make' არის ინსტანციის საკუთარი თვისება
8. შეადარეთ: შექმენით იგივე მანქანა ძველი Vehicle კონსტრუქტორით ჩელენჯი #3-დან
   და აჩვენეთ, რომ ორივე __proto__ ჯაჭვი ერთნაირად გამოიყურება
   (ინსტანცია -> Constructor.prototype -> Object.prototype -> null)

სატესტო მონაცემები: Honda Civic, Ford Mustang - ორივე იწყებს 0 კმ/სთ-დან

მინიშნება: კლასის სხეულში (კონსტრუქტორის გარეთ) განსაზღვრული მეთოდები
          ავტომატურად ემატება კლასის პროტოტიპს, არა თითოეულ ინსტანციას
მინიშნება: ES6 კლასები არ არის hoisted — უნდა გამოაცხადოთ გამოყენებამდე
მინიშნება: კლასები ყოველთვის strict mode-ში სრულდება

წარმატებები 😀
*/

// =======================================================================================
// ჩელენჯი #1 — ცხოველთა სამეფო (ამოხსნა)
// 1. და 2. Constructor ფუნქციის შექმნა 'Animal'
function Animal(species, name, sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
}

// 3. სამი ცხოველის ინსტანციის შექმნა 'new' ოპერატორით
const dog = new Animal('Dog', 'Rex', 'Woof');
const cat = new Animal('Cat', 'Whiskers', 'Meow');
const parrot = new Animal('Parrot', 'Polly', 'Squawk');

// 4. სამივე ცხოველის ობიექტის დალოგვა
console.log(dog);
console.log(cat);
console.log(parrot);

// 5. 'instanceof'-ის შემოწმება და დალოგვა
console.log(dog instanceof Animal); // true
console.log(cat instanceof Animal); // true
console.log(parrot instanceof Animal); // true

// 6. ჩვეულებრივი ობიექტის შექმნა და შემოწმება
const fish = { species: 'Fish', name: 'Nemo', sound: 'Blub' };
console.log(fish instanceof Animal); // false

// 7. კულისებში მიმდინარე 4 ნაბიჯი 'new' ოპერატორის გამოყენებისას:
/*
  1) იქმნება სრულიად ახალი, ცარიელი ობიექტი: {}
  2) ხდება ამ ახლად შექმნილი ობიექტის პროტოტიპის (__proto__) დაკავშირება
     კონსტრუქტორი ფუნქციის .prototype თვისებასთან.
  3) 'this' კვანძი მიებაება ამ ახალ ობიექტს და სრულდება კონსტრუქტორში დაწერილი კოდი
     (ანუ ახალ ობიექტზე იწერება species, name და sound თვისებები).
  4) ფუნქცია ავტომატურად აბრუნებს ამ ახლად შექმნილ ობიექტს (თუ კონსტრუქტორი 
     აშკარად სხვა ობიექტს არ აბრუნებს).
*/

// =======================================================================================
// ჩელენჯი #2 — პროტოტიპის ძალა (ამოხსნა)
// 1. Constructor ფუნქცია 'Smartphone'
function Smartphone(brand, model, batteryLevel) {
    this.brand = brand;
    this.model = model;
    this.batteryLevel = batteryLevel;
}

// 2. 'call' მეთოდის დამატება პროტოტიპზე
Smartphone.prototype.call = function (contact) {
    console.log(`Calling ${contact} from ${this.brand} ${this.model}...`);
};

// 3. 'checkBattery' მეთოდის დამატება პროტოტიპზე
Smartphone.prototype.checkBattery = function () {
    if (this.batteryLevel > 20) {
        console.log(`Battery at ${this.batteryLevel}%`);
    } else {
        console.log(`Low battery! Only ${this.batteryLevel}% left!`);
    }
};

// 4. ორი ინსტანციის შექმნა
const phone1 = new Smartphone('Apple', 'iPhone 15', 85);
const phone2 = new Smartphone('Samsung', 'Galaxy S24', 15);

// 5. 'call' მეთოდის გამოძახება
phone1.call('Giorgi');
phone2.call('Nino');

// 6. 'checkBattery' მეთოდის გამოძახება
phone1.checkBattery(); // Battery at 85%
phone2.checkBattery(); // Low battery! Only 15% left!

// 7. 'hasOwnProperty'-ის შემოწმება
console.log(phone1.hasOwnProperty('brand')); // true (საკუთარია)
console.log(phone1.hasOwnProperty('call'));  // false (პროტოტიპზეა)

// 8. phone1.__proto__-ის შედარება Smartphone.prototype-თან
console.log(phone1.__proto__ === Smartphone.prototype); // true

// =======================================================================================
// ჩელენჯი #3 — სატრანსპორტო ქარხანა (ამოხსნა)
// 1. Constructor ფუნქცია 'Vehicle'
function Vehicle(make, model, speed) {
    this.make = make;
    this.model = model;
    this.speed = speed;
}

// 2. 'accelerate' მეთოდი პროტოტიპზე
Vehicle.prototype.accelerate = function () {
    this.speed += 20;
    console.log(`${this.make} ${this.model} accelerates to ${this.speed} km/h`);
};

// 3. 'brake' მეთოდი პროტოტიპზე (მინიმუმ 0 სიჩქარე)
Vehicle.prototype.brake = function () {
    this.speed = Math.max(0, this.speed - 15);
    console.log(`${this.make} ${this.model} brakes to ${this.speed} km/h`);
};

// 4. 'status' მეთოდი პროტოტიპზე
Vehicle.prototype.status = function () {
    console.log(`${this.make} ${this.model} is going ${this.speed} km/h`);
};

// 5. სამი სატრანსპორტო საშუალების შექმნა
const car1 = new Vehicle('Toyota', 'Supra', 0);
const car2 = new Vehicle('BMW', 'M3', 0);
const car3 = new Vehicle('Tesla', 'Model S', 0);

// 6. მინი რბოლის სიმულაცია
console.log('--- Race Start ---');
car1.accelerate(); car1.accelerate(); car1.accelerate(); car1.brake(); car1.status();
car2.accelerate(); car2.accelerate(); car2.accelerate(); car2.brake(); car2.status();
car3.accelerate(); car3.accelerate(); car3.accelerate(); car3.brake(); car3.status();

// 7. პროტოტიპის ჯაჭვის გადამოწმება
console.log('--- Prototype Chain ---');
console.log(car1.__proto__ === Vehicle.prototype); // true
console.log(car1.__proto__.__proto__ === Object.prototype); // true
console.log(car1.__proto__.__proto__.__proto__); // null

// =======================================================================================
// ჩელენჯი #4 — სტატიკური vs ინსტანციის მეთოდები (ამოხსნა)
// 1. Constructor ფუნქცია 'MathHelper'
function MathHelper(value) {
    this.value = value;
}

// 2. სტატიკური მეთოდი 'isEven'
MathHelper.isEven = function (num) {
    return num % 2 === 0;
};

// 3. სტატიკური მეთოდი 'celsiusToFahrenheit'
MathHelper.celsiusToFahrenheit = function (celsius) {
    return celsius * 9 / 5 + 32;
};

// 4. სტატიკური მეთოდი 'factorial' (for ციკლით)
MathHelper.factorial = function (num) {
    if (num < 0) return undefined;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

// 5. ინსტანციის მეთოდი 'double'
MathHelper.prototype.double = function () {
    return this.value * 2;
};

// 6. ინსტანციის მეთოდი 'isPositive'
MathHelper.prototype.isPositive = function () {
    return this.value > 0;
};

// 7. ინსტანციის შექმნა და მისი მეთოდების გამოძახება
const helper = new MathHelper(7);
console.log(helper.double());     // 14
console.log(helper.isPositive()); // true

// 8. სტატიკური მეთოდების გამოძახება პირდაპირ კონსტრუქტორზე
console.log(MathHelper.isEven(4));                 // true
console.log(MathHelper.isEven(7));                 // false
console.log(MathHelper.celsiusToFahrenheit(100));  // 212
console.log(MathHelper.factorial(5));              // 120

// ტესტი: სტატიკური მეთოდის გამოძახება ინსტანციაზე (არ იმუშავებს!)
try {
    helper.isEven(4);
} catch (error) {
    console.log("შეცდომა: ინსტანციას არ აქვს წვდომა სტატიკურ მეთოდზე!", error.message);
}

// =======================================================================================
// ჩელენჯი #5 — კლასით რეფაქტორინგი (ამოხსნა)
// 1. ES6 კლასი 'VehicleCl'
class VehicleCl {
    // კონსტრუქტორი
    constructor(make, model, speed) {
        this.make = make;
        this.model = model;
        this.speed = speed;
    }

    // 2. 'accelerate' მეთოდი (ავტომატურად ჯდება პროტოტიპზე)
    accelerate() {
        this.speed += 20;
        console.log(`${this.make} ${this.model} accelerates to ${this.speed} km/h`);
    }

    // 3. 'brake' მეთოდი
    brake() {
        this.speed = Math.max(0, this.speed - 15);
        console.log(`${this.make} ${this.model} brakes to ${this.speed} km/h`);
    }

    // 4. 'status' მეთოდი
    status() {
        console.log(`${this.make} ${this.model} is going ${this.speed} km/h`);
    }
}

// 5. ორი ინსტანციის შექმნა
const civic = new VehicleCl('Honda', 'Civic', 0);
const mustang = new VehicleCl('Ford', 'Mustang', 0);

// 6. რბოლა ES6 კლასის ინსტანციებისთვის
civic.accelerate(); civic.accelerate(); civic.brake(); civic.status();
mustang.accelerate(); mustang.accelerate(); mustang.brake(); mustang.status();

// 7. კულისებში მიმდინარე მექანიზმების შემოწმება
console.log(civic.__proto__ === VehicleCl.prototype); // true
console.log(civic.hasOwnProperty('accelerate'));       // false (მეთოდი პროტოტიპზეა!)
console.log(civic.hasOwnProperty('make'));             // true (თვისება ინსტანციაზეა!)

// 8. შედარება ძველ კონსტრუქტორთან (ჩელენჯი #3-ის Vehicle)
// შევქმნათ ობიექტი ძველი სინტაქსით
const oldCar = new Vehicle('Honda', 'Civic', 0);

// შევადაროთ მათი __proto__ ჯაჭვები
console.log(civic.__proto__.__proto__ === oldCar.__proto__.__proto__); // true (ორივე Object.prototype-ია)
console.log(civic.__proto__.__proto__.__proto__ === null); // true

// დასკვნა: VehicleCl და Vehicle კულისებში აბსოლუტურად იდენტურ ჯაჭვს ქმნიან!