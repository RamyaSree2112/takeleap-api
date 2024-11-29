// Using var for declaring variables
var num1 = 10;
var num2 = 5;

// Perform addition using var
var sum = num1 + num2;
console.log("Sum (var):", sum); // Output: 15

// Using let for block-scoped variable declarations
let num3 = 20;
let num4 = 4;

// Perform subtraction using let
let difference = num3 - num4;
console.log("Difference (let):", difference); // Output: 16

// Using const for constant values
const num5 = 6;
const num6 = 3;

// Perform multiplication using const
const product = num5 * num6;
console.log("Product (const):", product); // Output: 18

// Demonstrating division with a mix of let and var
let quotient = num3 / num4;
console.log("Quotient (let and var):", quotient); // Output: 5

// Demonstrating modulus with let and const
let remainder = num5 % num6;
console.log("Remainder (let and const):", remainder); // Output: 0

// Perform a compound operation using all
let result = (num1 + num2) * num5 / num6 - num4;
console.log("Compound operation result:", result); // Output: 17
