export {}

/**
 * Purpose: Encapsulate data and behavior (OOP principles) 
 * Classes contain implementation, including constructors, methods, and property initializations.
 * Objects are instantiated from classes using new Keyword 
 */

// 1. Basic Class
class Browser {
  name: string
  version: number

  constructor(name: string, version: number) {
    this.name = name
    this.version = version
  }

  launch(): void {
    console.log(`Launching ${this.name} v${this.version}`)
  }
}

const chrome = new Browser("Chrome", 120)
chrome.launch()

// 2. Class with Method Returning Value
class Calculator {
  add(a: number, b: number): number {
    return a + b
  }
}

const calc = new Calculator()
console.log("Addition:", calc.add(10, 20))

// 3. Class Inheritance
class AdvancedCalculator extends Calculator {
  multiply(a: number, b: number): number {
    return a * b
  }
}

const advCalc = new AdvancedCalculator()
console.log("Multiplication:", advCalc.multiply(5, 6))
