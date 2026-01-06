/*
Arithmetic Operators

| Operator | Purpose        |
| -------- | -------------- |
| '+'      | Addition       |
| '-'      | Subtraction    |
| '*'      | Multiplication |
| '/'      | Division       |
| '%'      | Remainder      |
*/


let a: number = 10
let b: number = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/*
Assignment Operators
| Operator | Meaning             |
| -------- | ------------------- |
| '='      | Assign              |
| '+='     | Add and assign      |
| '-='     | Subtract and assign |
*/

let count: number = 5
count += 2          // Equivalent to: count = count + 2
count -= 1          // Equivalent to: count = count - 1


/*
Comparison Operators

| Operator | Meaning                    |
| -------- | -------------------------- |
| '=='     | Equal (value only – avoid) |
| '==='    | Equal (value and type)     |
| '!='     | Not equal                  |
| '!=='    | Not equal (strict)         |
| '>'      | Greater than               |
| '<'      | Less than                  |
| '>='     | Greater or equal           |
| '<='     | Less or equal              |
*/

let x: number = 10
let y: number = 20

console.log(x === y)
console.log(x !== y)
console.log(x < y)


/*
Logical Operators

| Operator | Meaning |
| -------- | ------- |
| '&&'     | AND     |
| '||'     | OR      |
| '!'      | NOT     |
*/

let isLoggedIn: boolean = true
let hasAccess: boolean = false

console.log(isLoggedIn && hasAccess)
console.log(isLoggedIn || hasAccess)
console.log(!isLoggedIn)


/*
Unary Operators
| Operator | Purpose   |
| -------- | --------- |
| `++`     | Increment |
| `--`     | Decrement |
| `!`      | Negation  |
*/

let retries: number = 3
retries++
console.log("Retries after Increment" + retries)

retries--
console.log("Retries after Decrement" + retries)


//String Operators
let firstName: string = "Shreyata"
let lastName: string = "Sugandhi"

let fullName1 = firstName + " " + lastName
console.log(fullName1)


let fullName2 = `${firstName} ${lastName}`
console.log(fullName2)

//Type Operators (typeof)
let data: unknown = "Playwright"

if (typeof data === "string") {
  console.log(data.toUpperCase())
}
