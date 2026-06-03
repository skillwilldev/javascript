/*
Create a 'restaurant' object with the following:
  - name: 'Samikitno'
  - city: 'Tbilisi'
  - rating: 4.5
  - menu: an array of 3 dish names
  - A method 'describe()' that returns:
    "Samikitno in Tbilisi — rated 4.5/5. Serves 3 dishes."
  - A method 'addDish(dish)' that adds to the menu and returns this (for chaining)

1. Call describe() and log the result
2. Chain two addDish() calls to add 'Lobiani' and 'Pkhali'
3. Log the updated menu
4. Use destructuring to extract name and city into variables, log them
*/



// Pizza
// Sushi
// Tacos
// Croissant
// Chicken
// Paella
// Chips
// Baklava

const log = console.log;
const restaurant = {
    name: 'Samikitno',
    city: 'Tbilisi',
    rating: 4.5,
    menu: ['Pizza', 'Sushi', 'Tacos'],
    messages:
        { mess1: 'dish added' }
    ,

    describe() {
        log(`Samikitno in Tbilisi — rated ${this.rating}/${Math.ceil(this.rating)}. Serves ${this.menu.length} dishes.`);
        return this;
    },

    addDish(dish) {
        this.menu.push(dish);
        this.rating++;
        log(this.messages.mess1);
        return this;
    }
}

restaurant.describe().addDish('Lobiani').addDish('Pkhali');

const { name, city, menu } = restaurant;
console.log(name);
console.log(city);
console.log(menu);

