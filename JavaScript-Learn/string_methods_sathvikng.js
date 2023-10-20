// Author : Sathvik N G
// JavaScript Concept : String Methods in Javascript
// GITHUB : https://github.com/sathvik-ng-07




// JavaScript String Length
// The length property returns the length of a string:

let text18 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).
let text20 = "Apple, Banana, Kiwi";
let part1 = text.slice(7, 13);
console.log(part);

// Note
// JavaScript counts positions from zero.
// First position is 0.
// Second position is 1.

// Examples

// If you omit the second parameter, the method will slice out the rest of the string:
let text3 = "Apple, Banana, Kiwi";
let part2 = text.slice(7);

// If a parameter is negative, the position is counted from the end of the string:

let text4 = "Apple, Banana, Kiwi";
let part3 = text.slice(-12);

// This example slices out a portion of a string from position -12 to position -6:

let text5 = "Apple, Banana, Kiwi";
let part4 = text.slice(-12, -6);

// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

// Example
let str1 = "Apple, Banana, Kiwi";
let part6 = str.substring(7, 13);
// If you omit the second parameter, substring() will slice out the rest of the string.

// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// Example
let str2 = "Apple, Banana, Kiwi";
let part7 = str.substr(7, 6);
// If you omit the second parameter, substr() will slice out the rest of the string.

// Example
let str3 = "Apple, Banana, Kiwi";
let part8 = str.substr(7);
// If the first parameter is negative, the position counts from the end of the string.

// Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
let text6 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Office");

// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// By default, the replace() method replaces only the first match:

// Example
let text7 = "Please visit Microsoft and Microsoft!";
let newText4 = text.replace("Microsoft", "Office");

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

// Example
let text8 = "Please visit Microsoft!";
let newText3 = text.replace("MICROSOFT", "Office");

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

Example;
let text9 = "Please visit Microsoft!";
let newText2 = text.replace(/MICROSOFT/i, "Office");

// Note
// Regular expressions are written without quotes.

// To replace all matches, use a regular expression with a /g flag (global match):

// Example
let text10 = "Please visit Microsoft and Microsoft!";
let newText1 = text.replace(/Microsoft/g, "Office");

// Note
// You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.

// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():

// Example
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

// Example
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");
// Note
// replaceAll() is an ES2021 feature.

// replaceAll() does not work in Internet Explorer.

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

// JavaScript String toUpperCase()
// Example
let text11 = "Hello World!";
let text12 = text1.toUpperCase();

// JavaScript String toLowerCase()
// Example
let text13 = "Hello World!"; // String
let text14 = text1.toLowerCase(); // text2 is text1 converted to lower

// JavaScript String concat()
// concat() joins two or more strings:

Example;
let text15 = "Hello";
let text16 = "World";
let text17 = text1.concat(" ", text2);

// The concat() method can be used instead of the plus operator. These two lines do the same:

Example;
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

Example;
let text21 = "      Hello World!      ";
let text22 = text1.trim();

// JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

// Example
let text23 = "     Hello World!     ";
let text24 = text1.trimStart();

// JavaScript String trimStart() is supported in all modern browsers since January 2020:

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// Example
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
// JavaScript String trimEnd() is supported in all modern browsers since January 2020:

// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// JavaScript String padStart()
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

// Examples
// Pad a string with "0" until it reaches the length 4:

let text25 = "5";
let padded1 = text.padStart(4, "0");

// Pad a string with "x" until it reaches the length 4:

let text26 = "5";
let padded2 = text.padStart(4, "x");
// Note
// The padStart() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

Example;
let numb1 = 5;
let text27 = numb.toString();
let padded3 = text.padStart(4, "0");

// JavaScript String padEnd()
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

// Examples
let text28 = "5";
let padded4 = text.padEnd(4, "0");
let text29 = "5";
let padded5 = text.padEnd(4, "x");
// Note
// The padEnd() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

// Example
let numb = 5;
let text30 = numb.toString();
let padded = text.padEnd(4, "0");

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

// Example
let text31 = "HELLO WORLD";
let char1 = text.charAt(0);

// JavaScript String charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// Example
let text32 = "HELLO WORLD";
let char2 = text.charCodeAt(0);

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings:

// Example
let text = "HELLO WORLD";
let char = text[0];

// Note
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
// Example
let text33 = "HELLO WORLD";
text[0] = "A"; // Gives no error, but does not work

// Converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.

// JavaScript String split()
// A string can be converted to an array with the split() method:

// Example
text.split(","); // Split on commas
text.split(" "); // Split on spaces
text.split("|"); // Split on pipe
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

// Example
text.split("");
