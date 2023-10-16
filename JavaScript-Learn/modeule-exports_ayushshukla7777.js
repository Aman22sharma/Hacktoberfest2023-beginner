// AUTHOR: Ayush Shukla
// JavaScript Concept: Module Export and Import
// GITHUB: https://github.com/ayushshukla77

// File: mathOperations.js
// This is a module that exports math-related functions.

// Function to add two numbers
export function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  export function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  export function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  export function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  // File: main.js
  // This is the main JavaScript file that demonstrates importing and using functions from the mathOperations module.
  
  // Import functions from the mathOperations module
  import { add, subtract, multiply, divide } from './mathOperations.js';
  
  // Use the imported functions
  const num1 = 10;
  const num2 = 5;
  
  // Perform arithmetic operations using the imported functions
  const sum = add(num1, num2);
  const difference = subtract(num1, num2);
  const product = multiply(num1, num2);
  const quotient = divide(num1, num2);
  
  // Display the results
  console.log(`Sum: ${sum}`);
  console.log(`Difference: ${difference}`);
  console.log(`Product: ${product}`);
  console.log(`Quotient: ${quotient}`);
  