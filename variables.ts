//============= Use of let ==========

let message = "Hello TypeScript"             //"let" keyword is used to declare a re-assignable, block-scoped local variable

console.log(message)

let browserName: string = "Chromium"        // browserName can only store string type text

console.log(browserName)

browserName = "Firefox"                     // value can be reassigned

console.log(browserName)



//================= Use of const ==============================

const baseUrl: string = "https://example.com"       // "const" declares variables that cannot be reassigned

console.log(baseUrl)


//================= variables =====================
//String -
let testerName: string = "Shreyata"

// Number - there is no float or double in TypeScript. Only numbers.
let experience: number = 20
let executionTime: number = 2.75
let browserVersion: number = 120.5

// Boolean
let isAutomationEnabled: boolean = true

//Type Inference -- data type will be decided at the compile time and not at runtime
let framework = "Playwright"

/* Why Types Matter?
Without types:
1. Wrong data reaches tests
2. Errors appear during execution
3. Debugging becomes expensive

With types:
1. IDE warns you early
2. Refactoring becomes safe
3. Test intent becomes clear
*/

//==================================


// Veriable type defined is called as Annotations in TypeScript

// Null in TypeScript -- explicitly set to empty
let sessionToken: string | null = null
console.log(sessionToken)
sessionToken = "abc123"
console.log(sessionToken)

// Undefined in TypeScript -- not yet available
let responseCode: number | undefined
responseCode = 200


//==================================================


// Any -- variable accepts any data type  -- powerful, convinent but dangerous 
let value: any

value = 10
value = "TypeScript"
value = true

let result: any = "Success"
result = 200
result = false


//any - with Objects
let user: any = {
  name: "Shreyata",
  role: "QE Consultant"
}

console.log(user.name)
console.log(user.department)

/*
department does not exist
TypeScript does not warn you
Bugs silently enter the system
*/


// any - in Function Parameters

function printValue(value: any) {
  console.log(value)
}

printValue(100)
printValue("Playwright with TypeScript")
printValue(true)

printValue({
  browser: "Chromium",
  version: 120
})


/*
Problem:
No validation
No contract
No clarity for future maintainers
*/

//any from External Data (Legitimate Use Case)
let apiResponse: any = {
  status: 200,
  body: {
    id: 1,
    name: "Admin"
  }
}

// ================== 

// Unknown  - 
//any says “trust me blindly”
//unknown says “prove it first”

let value1: unknown = "Playwright"

if (typeof value1 === "string") {
  console.log(value1.toUpperCase())
}


// unknown -  with function

function processData(data: unknown) {
  if (typeof data === "string") {
    console.log(data.length)
  }
}

processData("Playwright")
processData(123)
processData(true)
processData({ name: "Admin" })



// Objects: any vs unknown

printValue("Test execution started")

processData("Login successful")
processData({ status: 200 })   // safely ignored


let response1: any = { status: 200 }
// console.log(response1.body.user.name)
//TypeScript says nothing. Runtime might explode.

let response2: unknown = { status: 200 }
//console.log(response2.body)

//Compile-time error. So instead we should write
if (typeof response2 === "object" && response2 !== null) {
  console.log(response2)
}
