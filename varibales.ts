// Use of let to declare variables
let message = "Hello, TypeScript!";
console.log(message);

let browsername: string = "Chrome";
console.log("Browser Name:", browsername);

browsername = "Firefox"; // Reassigning a new value for let variable
console.log("Updated Browser Name:", browsername);

// Use of const to declare constants
const pi: number = 3.14159; // Ressigning a new value to const will cause an error
console.log("Value of Pi:", pi);

//String
const greeting: string = "Welcome to TypeScript!";
console.log(greeting);

//Number
const year: number = 2024;
console.log("Current Year:", year);

const temperature: number = 22.5;
console.log("Current Temperature:", temperature); 

//Boolean
const isTypeScriptFun: boolean = true;
console.log("Is TypeScript Fun?", isTypeScriptFun);

// Null in TypeScript
let emptyValue: string | null = null;
console.log("Empty Value:", emptyValue);

emptyValue = "Changed to a string"; // Reassigning null variable
console.log("Updated Empty Value:", emptyValue);

// Undefined in TypeScript
let notAssigned: number | undefined;
console.log("Not Assigned Value:", notAssigned);

notAssigned = 10; // Reassigning undefined variable
console.log("Updated Not Assigned Value:", notAssigned);

// Any type in TypeScript
let randomValue: any = 42;
console.log("Random Value (number):", randomValue);

let user: any = { name: "Alice", age: 30 };
console.log("User Name:", user.name);
console.log("User Department:", user.age); // Accessing non-existent property, no error due to 'any' type

// functions to demonstrate variable usage
function printMessage(msg: any): void {
    console.log("Message from function:", msg);
}

printMessage("Hello from TypeScript function!");
printMessage(100);
printMessage({ info: "This is an object", data: [1, 2, 3] });

//any for API // any says we can store any type of value
let apiResponse: any = { status: 200, data: { id: 1, name: "Test Item" } };
console.log("API Response Status:", apiResponse.status);
console.log("API Response Data Name:", apiResponse.data.name);

// Unknown type in TypeScript // Unknown says we don't know the type of value so Prove it first
let unknownValue: unknown = "This is an unknown type";

if (typeof unknownValue === "string") {
    console.log("Unknown Value as String:", unknownValue);
}

function processlength(value: unknown) {
    if (typeof value === "string") {
        console.log("Length of the string:", value.length);
    } else {
        console.log("Value is not a string.");
    }
}

processlength("Hello, World!");
processlength(12345);

//any vs unknown
let response1: any = { status: 200 }
//console.log("Response1 status:", response1.body.user.name); // TypeError: Cannot read properties of undefined (reading 'user') runtime error 
console.log("Response1 status:", response1.status);

let response2: unknown = {status: 400 };
//console.log(response2.body) // compliation error

if (typeof response2 === "object" && response2 !== null) {
    console.log(response2);
}