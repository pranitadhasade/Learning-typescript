
// Flow control decides which code executes, when, and how many times
// It brings intelligence and decision-making into programs


//==================== IF ===============================

// Executes code only if the condition is true
let isLoggedIn: boolean = true

if (isLoggedIn) {
  console.log("User is logged in")
}


//==================== IF – ELSE =========================

// Used when exactly one of two paths must be taken
let hasPermission: boolean = false

if (hasPermission) {
  console.log("Permission granted")
} else {
  console.log("Permission denied")
}


//==================== IF – ELSE IF – ELSE ===============

// Used when multiple conditions must be evaluated
let testScore: number = 82

if (testScore >= 90) {
  console.log("Grade A")
} else if (testScore >= 75) {
  console.log("Grade B")
} else {
  console.log("Grade C")
}


//==================== LOGICAL OPERATORS =================

// Combining multiple conditions in decision making
let isAutomationEnabled: boolean = true
let environment: string = "QA"

if (isAutomationEnabled && environment === "QA") {
  console.log("Execute automation tests in QA environment")
}


//==================== SWITCH CASE =======================

// Used when a variable has limited known values
let browserName: string = "Chromium"

switch (browserName) {
  case "Chromium":
    console.log("Launching Chromium browser")
    break
  case "Firefox":
    console.log("Launching Firefox browser")
    break
  case "WebKit":
    console.log("Launching WebKit browser")
    break
  default:
    console.log("Unsupported browser")
}


//==================== FOR LOOP ==========================

// Used when the number of iterations is known
for (let i = 1; i <= 3; i++) {
  console.log("Executing test iteration:", i)
}


//==================== WHILE LOOP ========================

// Used when looping depends on a condition
let retryCount: number = 3

while (retryCount > 0) {
  console.log("Retrying test. Remaining attempts:", retryCount)
  retryCount--
}


//==================== DO – WHILE LOOP ===================

// Executes at least once, regardless of condition
let attempt: number = 1

do {
  console.log("Execution attempt:", attempt)
  attempt++
} while (attempt <= 3)


//==================== BREAK =============================

// Break exits the loop immediately
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break
  }
  console.log("Break example value:", i)
}


//==================== CONTINUE ==========================

// Continue skips the current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log("Continue example value:", i)
}


//==================== REAL-WORLD AUTOMATION CONTEXT =====

// Flow control enables conditional test behavior
let isElementVisible: boolean = true

if (isElementVisible) {
  console.log("Clicking on element")
} else {
  console.log("Skipping action as element is not visible")
}

