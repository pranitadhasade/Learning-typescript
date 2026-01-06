export {}

/**
 * TYPESCRIPT ARROW FUNCTIONS
 * Purpose: Writing concise, predictable functions for automation logic
 * Context: Used heavily in Playwright callbacks, utilities, and helpers
 */


// ==================== 1. WHAT IS AN ARROW FUNCTION ====================

// Traditional function
function add(a: number, b: number): number {
  return a + b
}

/*
Hoisted: You can invoke add() before its declaration.
Loaded during compilation phase.
Classic, predictable, and battle-tested.
*/

// Arrow function equivalent
const addArrow = (a: number, b: number): number => {
  return a + b
}

/*
Not hoisted
Exists only after execution reaches that line.
Calling it before declaration results in a runtime error.
*/


console.log("Sum using arrow:", addArrow(10, 20))



// ==================== 2. SINGLE EXPRESSION (IMPLICIT RETURN) ====================

// When function has only one expression, braces and return can be removed
const multiply = (a: number, b: number): number => a * b

console.log("Multiply result:", multiply(5, 4))




// ==================== 3. SINGLE PARAMETER SYNTAX ====================

// Parentheses are optional when there is exactly one parameter
const getBrowserName = (browser: string): string => browser.toUpperCase()

console.log("Browser:", getBrowserName("chromium"))




// ==================== 4. NO PARAMETER FUNCTION ====================

const getExecutionStatus = (): string => {
  return "Execution Completed"
}

console.log(getExecutionStatus())




// ==================== 5. DEFAULT PARAMETERS ====================

// Useful when test data is optional
const launchBrowser = (browser: string = "Chromium"): string => {
  return `Launching ${browser}`
}

console.log(launchBrowser())
console.log(launchBrowser("Firefox"))




// ==================== 6. ARROW FUNCTION AS VARIABLE ====================

// Functions can be treated as values
const logMessage = (message: string): void => {
  console.log("LOG:", message)
}

logMessage("Test started")




// ==================== 7. ARROW FUNCTION RETURNING OBJECT ====================

// Parentheses are mandatory when returning an object literal
const createUser = (username: string, role: string) => ({
  username: username,
  role: role
})

const user = createUser("admin_01", "Admin")
console.log(user)



// ==================== 8. WHY ARROW FUNCTIONS MATTER IN AUTOMATION ====================

// Predictable behavior
// No dynamic 'this' binding
// Cleaner callbacks
// Less boilerplate

const waitForTestCompletion = (timeout: number): string => {
  return `Waiting for ${timeout}ms`
}

console.log(waitForTestCompletion(3000))



// ==================== END OF ARROW FUNCTION ====================

console.log("Arrow functions tutorial completed.")
