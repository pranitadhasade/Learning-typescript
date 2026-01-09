// Use of let to declare variables
var message = "Hello, TypeScript!";
console.log(message);
var browsername = "Chrome";
console.log("Browser Name:", browsername);
browsername = "Firefox"; // Reassigning a new value for let variable
console.log("Updated Browser Name:", browsername);
// Use of const to declare constants
var pi = 3.14159; // Ressigning a new value to const will cause an error
console.log("Value of Pi:", pi);
//String
var greeting = "Welcome to TypeScript!";
console.log(greeting);
//Number
var year = 2024;
console.log("Current Year:", year);
var temperature = 22.5;
console.log("Current Temperature:", temperature);
//Boolean
var isTypeScriptFun = true;
console.log("Is TypeScript Fun?", isTypeScriptFun);
// Null in TypeScript
var emptyValue = null;
console.log("Empty Value:", emptyValue);
emptyValue = "Changed to a string"; // Reassigning null variable
console.log("Updated Empty Value:", emptyValue);
// Undefined in TypeScript
var notAssigned;
console.log("Not Assigned Value:", notAssigned);
notAssigned = 10; // Reassigning undefined variable
console.log("Updated Not Assigned Value:", notAssigned);
// Any type in TypeScript
var randomValue = 42;
console.log("Random Value (number):", randomValue);
var user = { name: "Alice", age: 30 };
console.log("User Name:", user.name);
console.log("User Department:", user.age); // Accessing non-existent property, no error due to 'any' type
// functions to demonstrate variable usage
function printMessage(msg) {
    console.log("Message from function:", msg);
}
printMessage("Hello from TypeScript function!");
printMessage(100);
printMessage({ info: "This is an object", data: [1, 2, 3] });
//any for API // any says we can store any type of value
var apiResponse = { status: 200, data: { id: 1, name: "Test Item" } };
console.log("API Response Status:", apiResponse.status);
console.log("API Response Data Name:", apiResponse.data.name);
// Unknown type in TypeScript // Unknown says we don't know the type of value so Prove it first
var unknownValue = "This is an unknown type";
if (typeof unknownValue === "string") {
    console.log("Unknown Value as String:", unknownValue);
}
function processlength(value) {
    if (typeof value === "string") {
        console.log("Length of the string:", value.length);
    }
    else {
        console.log("Value is not a string.");
    }
}
processlength("Hello, World!");
processlength(12345);
//any vs unknown
var response1 = { status: 200 };
//console.log("Response1 status:", response1.body.user.name); 
console.log("Response1 status:", response1.status);
var response2 = { status: 400 };
if (typeof response2 === "object" && response2 !== null) {
    console.log(response2);
}
