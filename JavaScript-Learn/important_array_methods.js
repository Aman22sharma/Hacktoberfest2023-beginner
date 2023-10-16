//AUTHOR:Ravi Shrestha
//JavaScript Concept: Array methods=> map(), filter() and reduce()
//GITHUB: https://github.com/Ivar246


// Array has several methods, among them map, filter and reduce() are the most important.
// they are used for manipulating 
// these are higher order function (HOF) of javascript. If you ever work with any library or framework like react these you should be pretty handy with these methods 
// lets see how these methods work: 

// map()
/*
points:
-takes function as arguments
-creates new array by applying given function to each element of original array
-doesn't modify original array
-result is new array with same length as original 

syntax:
array_name.map((value, index, array)=>{})
*/

// example 
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map((num) => num * num)
console.log(squared)   // [1, 4, 9, 16, 25]


// filter()
/*
-take function as argument
-creates new array containing all elements from the original array that satisfies the provided condition,
-doesn't modify original array 
- result is an array of elements that meet the criteria specified by provided function
*/

//example: let's filter odd number from above array
const oddNumbers = numbers.filter((num) => {
    return num % 2 != 0
})
console.log(oddNumbers) //[1, 3, 5] 
// in short form  you can do it like
// const oddNumbers = numbers.filter((num)=>num%2!=0)

// reduce()
/*
- take function as argument, this function takes 
 (accumulator, currentValue, currentIndex, array)
- reduce an array to a single value 
- applies a provided function to each element of an array accumulating a result as it iterates through array,
- we can provide initial value of accumulator as an second argument to reduce function

*/

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum) // 15

// similary we can find the sum of odd number in an array like this
const oddSum = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 != 0) {
        return accumulator + currentValue;
    }
    return accumulator;
}, 0)
console.log(oddSum); // 9


// note:  while listing args in argument function  we don't necessarily have to mention (index, array) unless we need them