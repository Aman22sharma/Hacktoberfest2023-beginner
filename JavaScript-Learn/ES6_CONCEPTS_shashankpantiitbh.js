//AUTHOR:Shashank Pant
//JavaScript Concept: ES6 CONCEPTS
//GITHUB: https://github.com/Shashankpantiitbhilai

// New Features in ES6
// The let keyword
// The const keyword
// Arrow Functions
//Arrow functions were introduced in ES6.

//Arrow functions allow us to write shorter function syntax:
//const x = (x, y) => { return x * y };

let myFunction = (a, b) => a * b;
// The ... Operator
//The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];


// For/of
// Map Objects

//Being able to use an Object as a key is an important Map feature.

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ])

// Set Objects
//Learn more about Map objects, and the difference between a Map and an Array, in the the chapter: JavaScript Maps.

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
// Classes

// 

class ClassName {
    constructor() {  }
  }
// Promises
// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

// "Producing Code" can take some time and "Consuming Code" must wait for the result.
const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });
// Symbol
//A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

// It represents a unique "hidden" identifier that no other code can accidentally access.

// For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.

// Using Symbol() to create a unique identifiers, solves this problem:

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person[id] = 140353;
// Default Parameters
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  myFunction(5); // will return 15
// ES6 allows function parameters to have default values
// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// String.includes()

//The includes() method returns true if a string contains a specified value, otherwise false
let text = "Hello world, welcome to the universe.";
text.includes("world")
// String.startsWith()

//The startsWith() method returns true if a string begins with a specified value, otherwise false:
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello")   // Returns true
// String.endsWith()

//The endsWith() method returns true if a string ends with a specified value, otherwise false:
var text = "John Doe";
text.endsWith("Doe")    // Returns true
// Array.from()
//The Array.from() method returns an Array object from any object with a length property or any iterable object
Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
// Array keys()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}
// Array find()
//The find() method returns the value of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// Array findIndex()
//The findIndex() method returns the index of the first array element that passes a test function
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


// New Number Properties
EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER
// New Number Methods
Number.isInteger()
Number.isSafeInteger()
// New Global Methods
isFinite()
isNaN()
// Object entries
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
// JavaScript Modules
//Modules are imported in two differen ways:
import { name, age } from "./person.js";
import message from "./message.js";



//New Math Methods
/*ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()
*/

//Math.trunc(x) returns the integer part of x
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4
//Math.sign(x) returns if x is negative, null or positive
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
//Math.cbrt(x) returns the cube root of x
Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5
//Math.log2(x) returns the base 2 logarithm of x
Math.log2(2);    // returns 1
//Math.log10(x) returns the base 10 logarithm of x
Math.log10(10);    // returns 1