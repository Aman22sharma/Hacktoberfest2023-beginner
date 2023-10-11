

//Operators in JavaScript are symbols that allow you to perform operations on variables and values.
//There are different types of JavaScript operators:
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Ternary Operators
// Type Operators

//Arithmetic operator:it is used to perform arithmetic operation on numbers like-
//+: Addition
let a=2;
let b=4;
let c=a+b;
// -: Subtraction
let sub=b-a;
// *: Multiplication
 let mul=b*2;
// /: Division
 let div=10/5;
// %: Modulus (remainder after division)
let mod=10%2;
// ++: Increment
a=c++; //this means Assign the current value of 'c' to 'a', then increment 'c' by 1
// --: Decrement
b=c--;//this means Assign the current value of 'c' to 'b', then decrement 'c' by 1

// Assignment Operators:Assignment operators are used to assign values to variables and perform an operation at the same time

// =: Assignment
let x = 5; // Assigns the value 5 to the variable x
// +=: Addition assignment
let y = 3;
y += 2; // Adds 2 to y and assigns the result (y is now 5)

// -=: Subtraction assignment
let z = 10;
z -= 3; // Subtracts 3 from z and assigns the result (z is now 7)

// *=: Multiplication assignment
a = 4;
a *= 2; // Multiplies a by 2 and assigns the result (a is now 8)

// /=: Division assignment
b = 12;
b /= 3; // Divides b by 3 and assigns the result (b is now 4)

// %=: Modulus assignment
c = 13;
c %= 5; // Finds the remainder of 13 divided by 5 (c is now 3)


// Comparison Operators: Comparison operators are used to compare values or expressions and return a Boolean result (true or false) based on the comparison.

// ==: Equal to (loose equality, type coercion)
5 == "5"; // true (type coercion converts the string to a number)

// ===: Equal to (strict equality, no type coercion)
5 === "5"; // false (the value is the same, but the types are different)

// !=: Not equal to (loose inequality, type coercion)
5 != "10"; // true (type coercion converts the string to a number)

// !==: Not equal to (strict inequality, no type coercion)
5 !== "10"; // true (the values are different types)

// >: Greater than
10 > 5; // true

// <: Less than
5 < 10; // true

// >=: Greater than or equal to
10 >= 10; // true

// <=: Less than or equal to
5 <= 10; // true

// String Concatenation Operator:
// +: Can be used to concatenate strings.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Logical Operators:Logical operators are used to perform logical operations on Boolean values

// &&: Logical AND :The && operator returns true if both operands are true. Otherwise, it returns false.
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false

// ||: Logical OR:The || operator returns true if at least one of the operands is true. If both operands are false, it returns false.
true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false

// !: Logical NOT:The ! operator is a unary operator that negates the value of its operand. It converts true to false and false to true.
!true;  // false
!false; // true

// Ternary Operator (Conditional Operator):condition ? expr1 : expr2: If the condition is true, expr1 is returned; otherwise, expr2 is returned.

let age = 18;
let message = age >= 18 ? "You can vote" : "You cannot vote";

//Typeof Operator:typeof variable: Returns a string indicating the data type of the variable.
typeof 42; // "number"
typeof "Hello"; // "string"