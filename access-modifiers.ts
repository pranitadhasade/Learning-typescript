export {}

/**
 * Purpose: Control visibility and encapsulation of class properties/methods
 */

// 1. Public (default)
class User {
  public username: string
  public role: string

  constructor(username: string, role: string) {
    this.username = username
    this.role = role
  }

  public display(): void {
    console.log(`User: ${this.username}, Role: ${this.role}`)
  }
}

const user1 = new User("Shreyata", "QE")
console.log(user1.username)  // accessible
user1.display()               // accessible

// 2. Private
class Account {
  private password: string

  constructor(password: string) {
    this.password = password
  }

  public showPassword(): string {
    return this.password
  }
}

const acc = new Account("secret123")
// console.log(acc.password) // ERROR: private property
console.log(acc.showPassword()) // Correct access

// 3. Protected
class Person {
  protected name: string

  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  public getName(): string {
    return this.name
  }
}

const emp = new Employee("Ravi")
console.log(emp.getName())  // protected accessible inside subclass
// console.log(emp.name)    // ERROR: protected not accessible outside class
