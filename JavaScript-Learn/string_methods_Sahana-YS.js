//AUTHOR: Sahana Y S
//JavaScript Concept: String methods
//GITHUB: https://github.com/Sahana-YS

//String methods
let originalString = "Hello, World!";

// 1. Length of the string
console.log("Length of the string: " + originalString.length);

// 2. Convert to uppercase
console.log("Uppercase: " + originalString.toUpperCase());

// 3. Convert to lowercase
console.log("Lowercase: " + originalString.toLowerCase());

// 4. Substring
console.log("Substring (2 to 6): " + originalString.substring(2, 6));

// 5. Substr
console.log("Substr (2, 6): " + originalString.substr(2, 6));

// 6. IndexOf
console.log("Index of 'World': " + originalString.indexOf("World"));

// 7. Replace
let replacedString = originalString.replace("World", "JavaScript");
console.log("After replacement: " + replacedString);

// 8. Concatenation
let newString = originalString.concat(" Welcome to JavaScript!");
console.log("Concatenated string: " + newString);

// 9. Trim
let stringWithSpaces = "    Trim this string    ";
console.log("Trimmed string: " + stringWithSpaces.trim());

// 10. Split
let splitString = originalString.split(",");
console.log("Split string: " + splitString);

// 11. CharAt
console.log("Character at position 7: " + originalString.charAt(7));

// 12. CharCodeAt
console.log("ASCII code of character at position 7: " + originalString.charCodeAt(7));

// 13. Starts with
console.log("Starts with 'Hello': " + originalString.startsWith("Hello"));

// 14. Ends with
console.log("Ends with 'World!': " + originalString.endsWith("World!"));

// 15. Includes
console.log("Includes 'JavaScript': " + originalString.includes("JavaScript"));
