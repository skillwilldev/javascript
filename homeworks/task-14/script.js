////////////////////////////////////
// Browser Objects & Storage
// Practice Challenges - Conditions Only
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Window Inspector
// (Window Object)

/*
You want to build a utility that inspects the browser's Window object
and uses timers to display information at intervals.

1. Create a function 'getViewportInfo' that returns an object with:
   - innerWidth: window.innerWidth
   - innerHeight: window.innerHeight
   - outerWidth: window.outerWidth
   - outerHeight: window.outerHeight
   - scrollX: window.scrollX
   - scrollY: window.scrollY
2. Log the viewport info object
3. Use window.setTimeout to log "This message appeared after 2 seconds!"
   after a 2000ms delay. Store the timer ID in a variable 'delayTimer'.
4. Create a counter variable starting at 0. Use window.setInterval to
   increment the counter every 1 second and log "Tick: X" where X is
   the counter value. Store the interval ID in 'tickTimer'.
5. Use another setTimeout to stop the interval after 5 seconds by
   calling clearInterval(tickTimer). Log "Timer stopped after 5 ticks!"
6. Create a function 'checkWindowFeatures' that logs whether the
   following properties exist on the window object:
   - localStorage (typeof window.localStorage !== 'undefined')
   - sessionStorage
   - history
   - navigator
   Log each as "localStorage: available" or "localStorage: not available"
7. Call checkWindowFeatures and log a summary

TEST DATA: Use browser default viewport sizes

HINT: window.innerWidth gives the viewport width including scrollbar
HINT: setTimeout returns a numeric timer ID that can be passed to clearTimeout
HINT: setInterval repeats until clearInterval is called

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #2 - Device Detective
// (Navigator + Screen)

/*
Build a function that gathers comprehensive browser and device information
using the Navigator and Screen objects, and formats it as a readable report.

1. Create a function 'getBrowserInfo' that returns an object with:
   - userAgent: navigator.userAgent
   - language: navigator.language
   - languages: navigator.languages (array of preferred languages)
   - platform: navigator.platform
   - online: navigator.onLine (boolean)
   - cookiesEnabled: navigator.cookieEnabled
2. Create a function 'getScreenInfo' that returns an object with:
   - width: screen.width
   - height: screen.height
   - availWidth: screen.availWidth
   - availHeight: screen.availHeight
   - colorDepth: screen.colorDepth
   - pixelRatio: window.devicePixelRatio
3. Create a function 'detectBrowser' that reads navigator.userAgent and
   returns a simplified browser name: 'Chrome', 'Firefox', 'Safari',
   'Edge', or 'Unknown'
4. Create a function 'generateReport' that calls all functions above
   and returns a formatted multi-line string report like:
   "=== Device Detective Report ===
    Browser: Chrome
    User Agent: Mozilla/5.0 ...
    Language: en-US
    Online: Yes
    Screen: 1920x1080
    Pixel Ratio: 2x
    ================================"
5. Add an online/offline event listener that logs when the connection
   status changes: "Connection status changed: online" or "...offline"
6. Log the full report

HINT: Check for 'Edg' before 'Chrome' in userAgent, since Edge also contains 'Chrome'
HINT: navigator.onLine returns a boolean — convert to 'Yes'/'No' for display
HINT: Use template literals with \n for multi-line strings

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #3 - URL Parser
// (Location Object)

/*
Build a set of utility functions that work with the browser's Location
object and URLSearchParams to parse and construct URLs.

1. Create a function 'parseCurrentURL' that returns an object with
   these properties extracted from window.location:
   - protocol: location.protocol (e.g. 'https:')
   - host: location.host (e.g. 'example.com:3000')
   - hostname: location.hostname (e.g. 'example.com')
   - port: location.port (e.g. '3000')
   - pathname: location.pathname (e.g. '/products/shoes')
   - search: location.search (e.g. '?color=red&size=42')
   - hash: location.hash (e.g. '#section1')
   - href: location.href (the full URL)
2. Create a function 'getQueryParams' that takes a search string
   (like '?color=red&size=42') and returns an object with all
   key-value pairs using URLSearchParams:
   { color: 'red', size: '42' }
3. Create a function 'buildQueryString' that takes an object of
   key-value pairs and returns a query string using URLSearchParams:
   { color: 'red', size: '42' } → '?color=red&size=42'
4. Create a function 'addQueryParam' that takes a current search string,
   a key, and a value, and returns an updated search string with the
   new parameter added (or updated if it already exists)
5. Create a function 'removeQueryParam' that takes a search string
   and a key, and returns the search string without that parameter
6. Demonstrate all functions: parse the current URL, build query strings,
   add and remove parameters

TEST DATA: Parse: '?category=shoes&sort=price&color=red'
           Build: { page: '2', limit: '10', filter: 'active' }
           Add: 'brand' = 'nike' to the test search string
           Remove: 'sort' from the test search string

HINT: new URLSearchParams('?key=val') creates a params object
HINT: params.get('key') returns the value, params.entries() returns all pairs
HINT: params.set(key, value) adds or updates a parameter
HINT: params.delete(key) removes a parameter

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #4 - Theme Saver
// (localStorage)

/*
Implement a theme preference system that saves user settings to
localStorage using JSON serialization. The settings should persist
across page reloads.

1. Create a default settings object with these properties:
   - theme: 'light'
   - fontSize: 16
   - language: 'en'
   - sidebarCollapsed: false
2. Create a function 'saveSettings' that takes a settings object and
   saves it to localStorage using JSON.stringify. Use the key 'appSettings'.
   Log a confirmation message after saving.
3. Create a function 'loadSettings' that reads from localStorage using
   the key 'appSettings', parses it with JSON.parse, and returns the object.
   If nothing is stored yet, return the default settings object.
4. Create a function 'updateSetting' that takes a key and a value,
   loads the current settings, updates the specified key, saves the
   updated settings, and returns the new settings object.
5. Create a function 'toggleTheme' that:
   a) Loads the current settings using loadSettings
   b) Switches theme between 'light' and 'dark'
   c) Saves the updated settings
   d) Returns the new theme value
6. Create a function 'resetSettings' that removes 'appSettings' from
   localStorage and returns the default settings object
7. Demonstrate the full flow:
   - Save initial settings
   - Toggle theme twice (light → dark → light)
   - Update fontSize to 20
   - Load and verify final settings
   - Reset to defaults

TEST DATA: Use the settings object described above

HINT: JSON.stringify converts an object to a string for storage
HINT: JSON.parse converts a JSON string back to an object
HINT: localStorage.getItem returns null if the key doesn't exist
HINT: localStorage.removeItem(key) deletes a specific key

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #5 - Session Manager
// (sessionStorage + Cookies)

/*
Build a session management system that uses sessionStorage for temporary
data, cookies for persistent tokens, and compares the different storage
methods.

1. Create a function 'setCookie' that takes a name, value, and days
   parameter. It should:
   a) Calculate the expiration date using new Date() and setTime()
   b) Build the cookie string: "name=value;expires=...;path=/"
   c) Set the cookie using document.cookie
2. Create a function 'getCookie' that takes a cookie name and returns
   its value (or null if not found). It should:
   a) Split document.cookie by '; ' to get individual cookies
   b) Loop through and find the one that starts with "name="
   c) Return the value part (after the '=')
3. Create a function 'deleteCookie' that takes a cookie name and
   deletes it by setting its expiration date to the past
4. Create a function 'saveSessionData' that takes a key and an object,
   and saves it to sessionStorage using JSON.stringify
5. Create a function 'getSessionData' that takes a key and returns
   the parsed object from sessionStorage (or null if not found)
6. Create a function 'compareStorageMethods' that logs a comparison
   table of cookies vs localStorage vs sessionStorage, covering:
   - Maximum size
   - Persistence (when data expires)
   - Sent to server? (yes/no)
   - API simplicity
7. Demonstrate the full flow:
   - Set a cookie 'sessionToken' with value 'abc123' for 7 days
   - Save user preferences to sessionStorage
   - Read back both values
   - Log the comparison table
   - Delete the cookie and clear session data

TEST DATA:
  Cookie: name='sessionToken', value='abc123', days=7
  Session: key='userPrefs', value={ theme: 'dark', lang: 'ka' }

HINT: document.cookie does NOT overwrite all cookies — setting it adds/updates one cookie
HINT: To delete a cookie, set its expires to a past date
HINT: 1 day = 24 * 60 * 60 * 1000 milliseconds
HINT: sessionStorage data disappears when the tab is closed

GOOD LUCK 😀
*/


//  Challenge #1 — Window Inspector
const getViewportInfo = function () {
    return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
    };
};

console.log('--- Viewport Info ---');
console.log(getViewportInfo());

const delayTimer = setTimeout(function () {
    console.log('This message appeared after 2 seconds!');
}, 2000);


let counter = 0;
const tickTimer = setInterval(function () {
    counter++;
    console.log(`Tick: ${counter}`);
}, 1000);


setTimeout(function () {
    clearInterval(tickTimer);
    console.log('Timer stopped after 5 ticks!');
}, 5100);

const checkWindowFeatures = function () {
    const features = ['localStorage', 'sessionStorage', 'history', 'navigator'];
    console.log('\n--- Window Features Summary ---');

    features.forEach(feature => {
        const isAvailable = typeof window[feature] !== 'undefined';
        console.log(`${feature}: ${isAvailable ? 'available' : 'not available'}`);
    });
};

checkWindowFeatures();
// =================================================================================================
//Challenge #2 — Device Detective
const getBrowserInfo = function () {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        online: navigator.onLine,
        cookiesEnabled: navigator.cookieEnabled,
    };
};

const getScreenInfo = function () {
    return {
        width: screen.width,
        height: screen.height,
        availWidth: screen.availWidth,
        availHeight: screen.availHeight,
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
    };
};

const detectBrowser = function () {
    const ua = navigator.userAgent;
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    return 'Unknown';
};

const generateReport = function () {
    const browser = getBrowserInfo();
    const scr = getScreenInfo();
    const browserName = detectBrowser();

    return `
=== Device Detective Report ===
Browser: ${browserName}
User Agent: ${browser.userAgent}
Language: ${browser.language}
All Languages: ${browser.languages.join(', ')}
Platform: ${browser.platform}
Online: ${browser.online ? 'Yes' : 'No'}
Cookies Enabled: ${browser.cookiesEnabled ? 'Yes' : 'No'}
Screen: ${scr.width}x${scr.height}
Available Screen: ${scr.availWidth}x${scr.availHeight}
Color Depth: ${scr.colorDepth}-bit
Pixel Ratio: ${scr.pixelRatio}x
================================`;
};

window.addEventListener('online', () => console.log('Connection status changed: online'));
window.addEventListener('offline', () => console.log('Connection status changed: offline'));

console.log(generateReport());
// =================================================================================================

//Challenge #3 — URL Parser
const parseCurrentURL = function () {
    return {
        protocol: window.location.protocol,
        host: window.location.host,
        hostname: window.location.hostname,
        port: window.location.port,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        href: window.location.href,
    };
};

const getQueryParams = function (searchString) {
    const params = new URLSearchParams(searchString);
    const result = {};
    for (const [key, value] of params.entries()) {
        result[key] = value;
    }
    return result;
};

const buildQueryString = function (paramsObj) {
    const params = new URLSearchParams();
    for (const key in paramsObj) {
        params.set(key, paramsObj[key]);
    }
    return '?' + params.toString();
};

const addQueryParam = function (searchString, key, value) {
    const params = new URLSearchParams(searchString);
    params.set(key, value);
    return '?' + params.toString();
};

const removeQueryParam = function (searchString, key) {
    const params = new URLSearchParams(searchString);
    params.delete(key);
    return '?' + params.toString();
};

console.log('--- Current URL Info ---');
console.log(parseCurrentURL());


const testSearch = '?category=shoes&sort=price&color=red';
console.log(`\nInitial Test Search String: ${testSearch}`);

console.log('Parsed Query Params:', getQueryParams(testSearch));

const builtString = buildQueryString({ page: '2', limit: '10', filter: 'active' });
console.log('Built Query String:', builtString);

const withBrand = addQueryParam(testSearch, 'brand', 'nike');
console.log('After adding brand=nike:', withBrand);

const withoutSort = removeQueryParam(testSearch, 'sort');
console.log('After removing sort:', withoutSort);

// =================================================================================================
//Challenge #4 — Theme Saver
const defaultSettings = {
    theme: 'light',
    fontSize: 16,
    language: 'en',
    sidebarCollapsed: false,
};

const saveSettings = function (settingsObj) {
    localStorage.setItem('appSettings', JSON.stringify(settingsObj));
    console.log('Settings successfully saved to localStorage.');
};

const loadSettings = function () {
    const stored = localStorage.getItem('appSettings');
    return stored ? JSON.parse(stored) : { ...defaultSettings };
};

const updateSetting = function (key, value) {
    const currentSettings = loadSettings();
    currentSettings[key] = value;
    saveSettings(currentSettings);
    return currentSettings;
};

const toggleTheme = function () {
    const currentSettings = loadSettings();
    currentSettings.theme = currentSettings.theme === 'light' ? 'dark' : 'light';
    saveSettings(currentSettings);
    return currentSettings.theme;
};

const resetSettings = function () {
    localStorage.removeItem('appSettings');
    console.log('Settings reset to defaults.');
    return { ...defaultSettings };
};

console.log('--- Theme Saver Flow ---');

saveSettings(defaultSettings);

console.log('Toggle 1:', toggleTheme());
console.log('Toggle 2:', toggleTheme());

updateSetting('fontSize', 20);

const finalSettings = loadSettings();
console.log('Verified Final Settings:', finalSettings);

const defaultState = resetSettings();
console.log('State after reset:', defaultState);

// =================================================================================================
//Challenge #5 — Session Manager

const setCookie = function (name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
    console.log(`Cookie set: ${name}=${value}`);
};

const getCookie = function (name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
};

const deleteCookie = function (name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    console.log(`Cookie deleted: ${name}`);
};

const saveSessionData = function (key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
    console.log(`Session data saved under key "${key}"`);
};

const getSessionData = function (key) {
    const stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
};

const compareStorageMethods = function () {
    console.log('\n=== Storage Methods Comparison ===');
    console.table([
        { Feature: 'Max Size', Cookies: '~4 KB', localStorage: '~5-10 MB', sessionStorage: '~5-10 MB' },
        { Feature: 'Persistence', Cookies: 'Set by expires', localStorage: 'Until cleared', sessionStorage: 'Until tab close' },
        { Feature: 'Sent to Server', Cookies: 'Yes (automatically)', localStorage: 'No', sessionStorage: 'No' },
        { Feature: 'API Simplicity', Cookies: 'Manual string parsing', localStorage: 'Simple key-value', sessionStorage: 'Simple key-value' },
        { Feature: 'Scope', Cookies: 'All tabs / windows', localStorage: 'All tabs / windows', sessionStorage: 'Single tab only' }
    ]);
};

console.log('--- Session Manager Flow ---');

setCookie('sessionToken', 'abc123', 7);

const userPrefs = { theme: 'dark', lang: 'ka' };
saveSessionData('userPrefs', userPrefs);

console.log(`\nRetrieved Cookie 'sessionToken':`, getCookie('sessionToken'));
console.log(`Retrieved Session 'userPrefs':`, getSessionData('userPrefs'));
console.log(`Raw document.cookie string: "${document.cookie}"`);

compareStorageMethods();

console.log('\n--- Cleaning Up ---');
deleteCookie('sessionToken');
sessionStorage.removeItem('userPrefs');
console.log('All demonstrated data cleared.');