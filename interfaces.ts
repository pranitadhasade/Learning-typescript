export {}

/**
 * Purpose: Define the shape/contract of objects, function signatures, or classes
 * Interfaces do not contain implementation (except optional default values in TS 4.2+).
 * They enforce type safety, meaning objects or classes must match the structure.
 * Primarily used to define expected properties and method signatures.
 */

// 1. Basic Object Interface
interface User {
  username: string
  role: 'Admin' | 'QE'
  age?: number       // optional property
}

const user1: User = {
  username: "Shreyata",
  role: "QE",
}

const user2: User = {
  username: "Ravi",
  role: "Admin",
  age: 28
}

console.log(user1)
console.log(user2)

// 2. Function Interface
interface Operation {
  (a: number, b: number): number
}

const add: Operation = (x, y) => x + y
const multiply: Operation = (x, y) => x * y

console.log("Add:", add(5, 10))
console.log("Multiply:", multiply(5, 10))

// 3. Extending Interfaces
interface Employee extends User {
  department: string
}

const emp: Employee = {
  username: "Neha",
  role: "QE",
  department: "Automation"
}

console.log(emp)
