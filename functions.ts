export {}       

/*It turns the file into a module, even if it has no real exports.
Module (File Scope)
Each file has its own scope.
Nothing leaks to the global scope unless explicitly exported.
Prevents redeclaration errors like Cannot redeclare block-scoped variable.
*/


/* ======================================================
   TYPESCRIPT FUNCTIONS
   - Basic functions with return type
   - void functions
   - any type
   - optional/default/rest parameters
   - union return types
   - arrow functions
   - function expressions
   - returning objects
   - never type
====================================================== */

// 1. FUNCTION WITH RETURN TYPE
function addNumbers(a: number, b: number): number {
  return a + b
}
console.log("Sum:", addNumbers(10, 20))



// 2. VOID FUNCTION
function logMessage(message: string): void {
  console.log("Message:", message)
}
logMessage("TypeScript functions tutorial")



// 3. FUNCTION WITH ANY TYPE
function processData(data: any): any {
  return data
}
console.log("Any number:", processData(100))
console.log("Any string:", processData("Test"))
console.log("Any object:", processData({ id: 1, role: "admin" }))



// 4. FUNCTION WITH PARAMETERS
function greetUser(firstName: string, lastName: string): string {
  return `Hello ${firstName} ${lastName}`
}
console.log(greetUser("Shreyata", "Patil"))



// 5. OPTIONAL & DEFAULT PARAMETERS
function createUser(username: string, role: string = "default"): string {
  return `User: ${username}, Role: ${role}`
}
console.log(createUser("tester1"))
console.log(createUser("tester2", "admin"))



// 6. FUNCTION WITH UNION RETURN TYPE
function validateAge(age: number): boolean | string {
  return age >= 18 ? true : "Underage"
}
console.log("Age check:", validateAge(25))
console.log("Age check:", validateAge(15))



// 7. ARROW FUNCTIONS
const multiply = (x: number, y: number): number => x * y
console.log("Multiplication:", multiply(5, 6))

const displayStatus = (status: string): void => console.log("Status:", status)
displayStatus("ACTIVE")



// 8. FUNCTION EXPRESSION
const divide: (a: number, b: number) => number = function (a, b) {
  return a / b
}
console.log("Division:", divide(20, 4))



// 9. REST PARAMETERS
function calculateTotal(...prices: number[]): number {
  let total = 0
  for (const price of prices) {
    total += price
  }
  return total
}

console.log("Total Price:", calculateTotal(100, 200, 300))


// 10. FUNCTION RETURNING OBJECT
function createUserObject(id: number, name: string): { id: number; name: string } {
  return { id, name }
}
console.log("User Object:", createUserObject(1, "Ravi"))


// 11. NEVER RETURN TYPE
function throwError(message: string): never {
  throw new Error(message)
}

// Uncomment to test
// throwError("Critical system failure")

// Automation example - 
function validateTestData(data: string | null): never | void {
  if (!data) {
    throwError("Test data is missing")
  }
  console.log("Data is valid:", data)
}

// validateTestData(null) // Throws error
