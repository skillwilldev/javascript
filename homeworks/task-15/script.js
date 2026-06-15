////////////////////////////////////
// Callbacks, Timers & DOM
// Practice Challenges - Conditions Only
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Array Processor
// (Callbacks)

/*
Build a mini data processing library using callbacks to transform,
filter, and reduce arrays.

1. Create a function 'processArray' that takes an array and a callback,
   applies the callback to each element, and returns a new array with
   the results
2. Create a function 'filterArray' that takes an array and a predicate
   callback, returns a new array containing only the elements where
   the predicate returns true
3. Create a function 'reduceArray' that takes an array, a callback
   with two parameters (accumulator, current), and an initialValue.
   It should iterate through the array, passing the accumulator and
   each element to the callback, and return a single value
4. Create these callback functions:
   - 'double': takes a number, returns n * 2
   - 'isPositive': takes a number, returns true if n > 0
   - 'sumReducer': takes (acc, curr), returns acc + curr
5. Demonstrate all functions with the test data:
   - processArray with double
   - filterArray with isPositive
   - reduceArray with sumReducer (initialValue: 0)
   - Chain them: filter positives, then double them, then sum
6. BONUS: Create a function 'compose' that takes two functions (f, g)
   and returns a new function that applies them right to left:
   compose(f, g)(x) => f(g(x))

TEST DATA: [3, -1, 4, -5, 2, -3, 6]

HINT: processArray is similar to Array.prototype.map
HINT: filterArray is similar to Array.prototype.filter
HINT: reduceArray is similar to Array.prototype.reduce
HINT: compose(double, isPositive) would not make sense — compose functions
      that have compatible input/output types

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #2 - Delayed Logger
// (setTimeout)

/*
Build a messaging system with delayed notifications using setTimeout.

1. Create a function 'delayedLog' that takes a message and a delay (ms),
   logs the message after the delay using setTimeout, and returns the
   timer ID
2. Create a function 'cancelableDelay' that takes a message and a delay,
   and returns an object with:
   - timerId: the timer ID from setTimeout
   - cancel(): a method that calls clearTimeout to cancel the delay
3. Create a function 'sequentialMessages' that takes an array of messages
   and a gap (ms). It should log each message one after another with the
   given gap between them. Use setTimeout with increasing delays
   (first message at gap*1, second at gap*2, etc.)
4. Create a function 'delayedCallback' that takes a callback, an args
   array, and a delay (ms). It calls the callback with the args after
   the delay using setTimeout
5. Demonstrate all functions:
   - delayedLog with a 1000ms delay
   - cancelableDelay: create one and cancel it before it fires
   - sequentialMessages with the test data
   - delayedCallback with a function that sums two numbers
6. BONUS: Create a function 'debounce' that takes a function and a delay,
   and returns a new function that only executes after the specified delay
   has passed since the last call. If called again before the delay,
   the previous timer resets

TEST DATA: Messages: ['Hello!', 'How are you?', 'Goodbye!'], Gap: 1500ms

HINT: setTimeout returns a numeric timer ID
HINT: clearTimeout(timerId) cancels a pending setTimeout
HINT: For sequentialMessages, the i-th message fires at delay = gap * (i + 1)
HINT: For debounce, store the timer ID in a closure variable

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #3 - Repeating Counter
// (setInterval)

/*
Build a configurable counter system using setInterval for repeated
execution at fixed time intervals.

1. Create a function 'createCounter' that takes start, end, step, and
   intervalMs. It should:
   - Start counting from 'start', incrementing by 'step' at each interval
   - Log each value as it counts
   - When the value reaches or exceeds 'end', stop the interval and
     log "Counter finished!"
   - Return the interval ID
2. Create a function 'countdown' that takes a number of seconds and a
   callback. It should:
   - Log each second as it counts down from 'seconds' to 0
   - When it reaches 0, call the callback and log "Done!"
   - Return the interval ID
3. Create a function 'repeater' that takes a callback and intervalMs.
   It should:
   - Call the callback repeatedly at the given interval
   - Return an object with a stop() method that clears the interval
4. Demonstrate all functions:
   - createCounter: count from 1 to 10 by 2, every 800ms
   - countdown: from 5 seconds, callback logs "Countdown complete!"
   - repeater: log the current time every 2000ms, stop after 6 seconds
     using setTimeout to call stop()

TEST DATA: Counter: start=1, end=10, step=2, interval=800ms
           Countdown: 5 seconds

HINT: setInterval returns an interval ID that can be passed to clearInterval
HINT: Inside createCounter, use a variable to track the current value
HINT: For the repeater demo, use setTimeout to call stop() after 6 seconds
HINT: new Date().toLocaleTimeString() gives a readable current time

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #4 - DOM Explorer
// (DOM Selection & Manipulation)

/*
NOTE: This challenge requires running in the browser with an HTML page.

Explore and manipulate the DOM using various selection and modification
methods.

1. Use document.getElementById to get an element by its ID and log
   its textContent
2. Use document.querySelector with a CSS class selector (e.g. '.item')
   to find the first matching element and change its style:
   - Set backgroundColor to '#e0f7fa'
   - Set color to '#006064'
3. Use document.querySelectorAll to get all elements with a certain
   class (e.g. '.item'). Log how many elements were found. Iterate
   through them with forEach and log each element's textContent
4. Convert the NodeList from querySelectorAll to an Array using
   Array.from(). Then use filter() to keep only elements whose
   textContent length is greater than 10. Log the filtered results
5. Use classList on an element:
   - Toggle a class (e.g. 'highlight') using classList.toggle()
   - Check if the class was added using classList.contains()
   - Log the result: "Class 'highlight' is present: true/false"
6. Change an element's innerHTML to include formatted HTML content,
   for example: '<strong>Updated!</strong> <em>This was changed via JS</em>'

TEST DATA: Use elements from the page's HTML

HINT: getElementById does NOT use a '#' prefix — just the ID string
HINT: querySelector uses CSS selector syntax: '.class', '#id', 'tag'
HINT: querySelectorAll returns a NodeList, not an Array
HINT: Array.from(nodeList) converts a NodeList to a real Array
HINT: classList.toggle returns a boolean indicating the final state

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #5 - Interactive Timer
// (Callbacks + Timers + DOM)

/*
NOTE: This challenge requires running in the browser with an HTML page.

Build an interactive stopwatch with start, stop, and reset controls
that combines callbacks, timers, and DOM manipulation.

1. Select the display element, start button, stop button, and reset
   button using document.getElementById. Use IDs: 'display', 'startBtn',
   'stopBtn', 'resetBtn'
2. Create variables:
   - elapsedSeconds: starts at 0 (tracks total seconds)
   - timerInterval: starts as null (stores the interval ID)
3. Create a function 'formatTime' that takes total seconds and returns
   a string in "MM:SS" format. Use Math.floor for minutes (seconds / 60)
   and remainder for seconds (seconds % 60). Pad with leading zeros
   using String(n).padStart(2, '0')
4. Create a function 'updateDisplay' that calls formatTime with
   elapsedSeconds and sets the display element's textContent to the result
5. Add a click event listener on the start button:
   - If timerInterval is null (not already running), start a setInterval
     that increments elapsedSeconds by 1 every 1000ms and calls updateDisplay
   - Store the interval ID in timerInterval
6. Add a click event listener on the stop button:
   - Call clearInterval(timerInterval) to stop the timer
   - Set timerInterval to null
7. Add a click event listener on the reset button:
   - Stop the timer (clearInterval + set to null)
   - Reset elapsedSeconds to 0
   - Call updateDisplay to show "00:00"
8. BONUS: Add a "Lap" button (ID: 'lapBtn') that, when clicked, creates
   a new <li> element with the current formatted time and appends it
   to a <ul> element (ID: 'lapList')

TEST DATA: Run the stopwatch, click start/stop/reset, verify the
           time display updates correctly

HINT: setInterval returns an ID — store it so you can clearInterval later
HINT: Check if timerInterval is null before starting to prevent multiple intervals
HINT: String(5).padStart(2, '0') returns '05'
HINT: document.createElement('li') creates a new list item element
HINT: parentElement.appendChild(childElement) adds an element to the DOM

GOOD LUCK 😀
*/


//Practice Challenge #1 - Array Processor (Callbacks)
// =============================================== 
// 1. processArray (Similar to Array.prototype.map)
function processArray(arr, callback) {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
   }
   return result;
}

// 2. filterArray (Similar to Array.prototype.filter)
function filterArray(arr, predicate) {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
         result.push(arr[i]);
      }
   }
   return result;
}

// 3. reduceArray (Similar to Array.prototype.reduce)
function reduceArray(arr, callback, initialValue) {
   let accumulator = initialValue;
   for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
   }
   return accumulator;
}

// 4. Callbacks
const double = (n) => n * 2;
const isPositive = (n) => n > 0;
const sumReducer = (acc, curr) => acc + curr;

// 6. BONUS: Compose function
const compose = (f, g) => (x) => f(g(x));

// 5. Demonstration
const testData1 = [3, -1, 4, -5, 2, -3, 6];

console.log("--- Challenge #1 Demonstration ---");
console.log("Original Data:", testData1);

// Demonstration of individual functions
const doubled = processArray(testData1, double);
console.log("Doubled:", doubled); // [6, -2, 8, -10, 4, -6, 12]

const positives = filterArray(testData1, isPositive);
console.log("Positives:", positives); // [3, 4, 2, 6]

const totalSum = reduceArray(testData1, sumReducer, 0);
console.log("Total Sum:", totalSum); // 6

// Chaining: filter positives, then double them, then sum
const chainedResult = reduceArray(
   processArray(filterArray(testData1, isPositive), double),
   sumReducer,
   0
);
console.log("Chained Result (Positives -> Doubled -> Sum):", chainedResult);


//Practice Challenge #2 - Delayed Logger (setTimeout)
// =============================================== 
// 1. delayedLog
function delayedLog(message, delay) {
   return setTimeout(() => {
      console.log(message);
   }, delay);
}

// 2. cancelableDelay
function cancelableDelay(message, delay) {
   const timerId = setTimeout(() => {
      console.log(message);
   }, delay);

   return {
      timerId: timerId,
      cancel() {
         clearTimeout(timerId);
         console.log(`Cancelled delayed message: "${message}"`);
      }
   };
}

// 3. sequentialMessages
function sequentialMessages(messages, gap) {
   messages.forEach((msg, i) => {
      setTimeout(() => {
         console.log(`[Sequential] ${msg}`);
      }, gap * (i + 1));
   });
}

// 4. delayedCallback
function delayedCallback(callback, args, delay) {
   return setTimeout(() => {
      callback(...args);
   }, delay);
}

// 6. BONUS: Debounce function
function debounce(func, delay) {
   let timerId = null;
   return function (...args) {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
         func(...args);
      }, delay);
   };
}

// 5. Demonstration
console.log("--- Challenge #2 Demonstration ---");

// delayedLog (runs after 1000ms)
delayedLog("Delayed message after 1000ms", 1000);

// cancelableDelay (cancelled immediately, should not fire)
const task = cancelableDelay("This should not be logged", 2000);
task.cancel();

// sequentialMessages
const messages = ['Hello!', 'How are you?', 'Goodbye!'];
sequentialMessages(messages, 1500);
// Fires at 1500ms, 3000ms, and 4500ms respectively

// delayedCallback
const sum = (a, b) => console.log(`Delayed Callback Sum Result: ${a + b}`);
delayedCallback(sum, [5, 10], 1200);

// =============================================== 
//Practice Challenge #3 - Repeating Counter (setInterval)
// 1. createCounter
function createCounter(start, end, step, intervalMs) {
   let current = start;
   console.log(`Counter started at: ${current}`);

   const intervalId = setInterval(() => {
      current += step;
      if (current >= end) {
         console.log(`Counter value: ${current}`);
         console.log("Counter finished!");
         clearInterval(intervalId);
      } else {
         console.log(`Counter value: ${current}`);
      }
   }, intervalMs);

   return intervalId;
}

// 2. countdown
function countdown(seconds, callback) {
   let currentSecond = seconds;
   console.log(`Countdown: ${currentSecond}`);

   const intervalId = setInterval(() => {
      currentSecond--;
      if (currentSecond <= 0) {
         console.log("Countdown: 0 -> Done!");
         callback();
         clearInterval(intervalId);
      } else {
         console.log(`Countdown: ${currentSecond}`);
      }
   }, 1000);

   return intervalId;
}

// 3. repeater
function repeater(callback, intervalMs) {
   const intervalId = setInterval(callback, intervalMs);
   return {
      stop() {
         clearInterval(intervalId);
         console.log("Repeater stopped.");
      }
   };
}

// 4. Demonstration
console.log("--- Challenge #3 Demonstration ---");

// createCounter: 1 to 10 by 2, every 800ms
createCounter(1, 10, 2, 800);

// countdown: from 5 seconds
countdown(5, () => {
   console.log("Countdown complete!");
});

// repeater: log time every 2000ms, stop after 6000ms
const timeRepeater = repeater(() => {
   console.log(`Current Time: ${new Date().toLocaleTimeString()}`);
}, 2000);

setTimeout(() => {
   timeRepeater.stop();
}, 6000);

// =============================================== 
//Practice Challenge #4 - DOM Explorer (DOM Selection & Manipulation)
window.addEventListener('DOMContentLoaded', () => {
   console.log("--- Challenge #4 Demonstration ---");

   // 1. document.getElementById
   const mainTitle = document.getElementById('title'); // Replace 'title' with your specific HTML ID
   if (mainTitle) {
      console.log("TextContent of ID element:", mainTitle.textContent);
   }

   // 2. document.querySelector
   const firstItem = document.querySelector('.item');
   if (firstItem) {
      firstItem.style.backgroundColor = '#e0f7fa';
      firstItem.style.color = '#006064';
   }

   // 3. document.querySelectorAll
   const allItems = document.querySelectorAll('.item');
   console.log(`Found ${allItems.length} elements with class '.item'`);
   allItems.forEach((element) => {
      console.log("Item content:", element.textContent);
   });

   // 4. Convert NodeList to Array and filter length > 10
   const itemsArray = Array.from(allItems);
   const longItems = itemsArray.filter(item => item.textContent.trim().length > 10);
   console.log("Filtered items with text length > 10:", longItems);

   // 5. classList manipulation
   if (firstItem) {
      const isPresent = firstItem.classList.toggle('highlight');
      console.log(`Class 'highlight' is present: ${isPresent}`);
      // Optional check verifying the .contains() api
      console.log(`Double check via .contains(): ${firstItem.classList.contains('highlight')}`);
   }

   // 6. Change innerHTML with formatted content
   const updateTarget = document.querySelector('.update-target'); // Replace with your element's selector
   if (updateTarget) {
      updateTarget.innerHTML = '<strong>Updated!</strong> <em>This was changed via JS</em>';
   }
});


//Practice Challenge #5 - Interactive Timer (Callbacks + Timers + DOM)
// =============================================== 
window.addEventListener('DOMContentLoaded', () => {
   // 1. Select elements
   const display = document.getElementById('display');
   const startBtn = document.getElementById('startBtn');
   const stopBtn = document.getElementById('stopBtn');
   const resetBtn = document.getElementById('resetBtn');
   const lapBtn = document.getElementById('lapBtn');
   const lapList = document.getElementById('lapList');

   // 2. Setup tracking states
   let elapsedSeconds = 0;
   let timerInterval = null;

   // 3. Format Time Utility
   function formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      return `${formattedMinutes}:${formattedSeconds}`;
   }

   // 4. Update UI Display Layer
   function updateDisplay() {
      display.textContent = formatTime(elapsedSeconds);
   }

   // 5. Start Button Interactivity
   startBtn.addEventListener('click', () => {
      // Check avoids overlapping multiple loops/intervals
      if (timerInterval === null) {
         timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateDisplay();
         }, 1000);
      }
   });

   // 6. Stop Button Interactivity
   stopBtn.addEventListener('click', () => {
      if (timerInterval !== null) {
         clearInterval(timerInterval);
         timerInterval = null;
      }
   });

   // 7. Reset Button Interactivity
   resetBtn.addEventListener('click', () => {
      // Clear out execution loop
      if (timerInterval !== null) {
         clearInterval(timerInterval);
         timerInterval = null;
      }
      // Wipe counts and clean visual states
      elapsedSeconds = 0;
      updateDisplay();

      // Clear out lap list elements if bonus is active
      if (lapList) {
         lapList.innerHTML = '';
      }
   });

   // 8. BONUS: Lap Addition System
   if (lapBtn && lapList) {
      lapBtn.addEventListener('click', () => {
         // Create new line node element
         const newLapElement = document.createElement('li');
         newLapElement.textContent = formatTime(elapsedSeconds);

         // Append runtime node cleanly to bottom list container
         lapList.appendChild(newLapElement);
      });
   }
});
