//AUTHOR: Prakash Mondal
//JavaScript Concept:  Variable
//GITHUB: https://github.com/rko0211



//JavaScript concept below


// Variables are just like a container used to store data.

/*
All JavaScript variables must be identified with unique names.

The general rules for constructing names for variables (unique identifiers) are:

    Names can contain letters, digits, underscores, and dollar signs.
    Names must begin with a letter.
    Names can also begin with $ and _ (but we will not use it in this tutorial).
    Names are case sensitive (y and Y are different variables).
    Reserved words (like JavaScript keywords) cannot be used as names.
 */

// Javascript is a case-sensitive language .

//  In javascript, variables are declared in 4 ways -

// 1. Automatically:- In that case we don't have to specify any data type with the variable name

/* In other language like C/C++/JAVA if we don't use any data type with variable then they will throw error
 but in javascript no error you will get for that syntax given bello - */
// Example :-
// It is my advise for you that do not use this syntax in your program it is not good practice

a = 5;  // 'a' store value 5
b = 10; // 'b' store value 10
c = a + b // 'c' store value 10+5 = 15
name = "hello";
console.log(c); // use to print result in browser console

// --------------------------------------------------------------------------------------------------------------------

// 2. Using 'var' keyword

// The 'var' key word should only be used with variables if it may be accessed outside it's scope 
// Example:- 

var x = 8;
var string = "Aman Kumar Sharma";
var pi = 3.12;

// ---------------------------------------------------------------------------------------------------------------------

// 3. Using 'let' keyword
// If we declare variable with 'let' then it can't be used outside it's scope
// Example:-

let val1 = 20;
let name1 = 'rko0211';
let val2 = 3.2112;

// ----------------------------------------------------------------------------------------------------------------------

// 4. Using 'const' keyword
// 'const' keyword is usefull for those variable whose value can not be changed.

// Example :-

const p1 = 10;
const p2 = 20;
const str = "Hello World";
let t = p1 + p2;

// Here 'p1', 'p2' are const type variables so their value would not be changed but the value of variable 't' can be changed

// ----------------------------------------------------------------------------------------------------------------------

// One Statement many variables

let person = "Aman Kumar Sharma",
    carName = 'Audi',
    price = 20000000;

// Re-declaring JS variables
// If we re-declare a javascript variable declared with 'var', then it will not lose it's value
var carName1 = "BMW";
var carName1;
console.log(carName1);  // Output :- BMW

// We can not re-declare a variable declared with 'let' or 'const' keyword
/*
ERROR PART -

let price1 = 2000;
let price1;

*/

// Javascript Dollar Sign $
// JS treat '$' sign as a letter. So, using $ sign we can declare variable
// Example :-

let $$ = "RKO";
let $$$ = 211;
var $$$$ = "Welcompe to JS Editorial";
const $$$$$ = 3.14;

// Using Underscore(_) we can declare JS variable like-
let _name = "Javascript";
let _10 = 20;
console.log(_10);