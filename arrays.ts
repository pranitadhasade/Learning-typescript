/**
 * TYPESCRIPT ARRAYS FOR AUTOMATION
 * Purpose: Handling test data, environment lists, and multi-browser execution.
 */

// ==================== 1. ARRAY DECLARATION ====================

// Method A: Square bracket notation (Preferred)
let browsers: string[] = ["Chromium", "Firefox", "WebKit"];

// Method B: Generic notation
let executionTimes: Array<number> = [1.5, 2.8, 3.2];

// Array of booleans (Checkpoints)
let testResults: boolean[] = [true, false, true];

// Read-only Arrays (Immutable configuration)
const envConfig: readonly string[] = ["DEV", "STAGING", "PROD"];
// envConfig.push("QA"); // Error: Property 'push' does not exist on type 'readonly string[]'


// ==================== 2. ACCESSING & MODIFYING ====================

// Access via index
console.log("Primary Browser:", browsers[0]);

// Modifying an element
browsers[1] = "Firefox ESR";

// Array Length
console.log("Total Browsers to test:", browsers.length);


// ==================== 3. ADDING & REMOVING ====================

browsers.push("Edge");      // Adds to end
browsers.unshift("Safari"); // Adds to beginning
browsers.pop();             // Removes last element
browsers.shift();           // Removes first element


// ==================== 4. CHECKING EXISTENCE ====================

// Method A: Modern ES6+ (Recommended)
let isWebKitSupported: boolean = browsers.includes("WebKit");

// Method B: Manual Loop (The "Under the Hood" logic)
let hasChromium: boolean = false;
for (let i = 0; i < browsers.length; i++) {
    if (browsers[i] === "Chromium") {
        hasChromium = true;
        break;
    }
}
console.log("Contains Chromium:", hasChromium);


// ==================== 5. ADVANCED TYPES (UNION & TUPLES) ====================

// Union Type: Useful for mixed status logs
let testLog: (string | number)[] = ["LoginTest", 200, "Success"];

// Tuples: Fixed length and fixed type order (e.g., Viewport dimensions)
let viewport: [number, number] = [1920, 1080];


// ==================== 6. ARRAY OF OBJECTS ====================

interface TestUser {
    username: string;
    role: 'Admin' | 'QE'; 
}

let testUsers: TestUser[] = [
    { username: "admin_01", role: "Admin" },
    { username: "tester_01", role: "QE" }
];

// Iterating through objects
testUsers.forEach((user) => {
    console.log(`Checking permissions for: ${user.username} (Role: ${user.role})`);
});


// ==================== 7. TRANSFORMING DATA ====================

const appNames: string[] = ["login", "dashboard", "settings"];

// .map() - Creating URLs from paths
const fullUrls = appNames.map(path => `https://test-env.com/${path}`);

// .filter() - Finding specific data
const longAppNames = appNames.filter(name => name.length > 5);


// ==================== 8. MULTI-DIMENSIONAL (TABLE DATA) ====================

// Useful for Data-Driven Testing (DDT) rows and columns
let testMatrix: string[][] = [
    ["user1", "pass1"],
    ["user2", "pass2"],
    ["user3", "pass3"]
];

console.log("Execution complete.");