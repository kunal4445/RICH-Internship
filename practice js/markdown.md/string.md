# JavaScript Strings
In JavaScript, a string is a sequence of characters used to represent text. Strings are enclosed in either:

Single quotes ' '

Double quotes " "

Backticks <code>` `</code> (template literals)

# Examples:
javascript
Copy
Edit
let name = 'Alice';         // Single quotes
let greeting = "Hello";     // Double quotes
let message = `Hi, ${name}`; // Template literal with variable interpolation
Key String Features:
Strings are immutable (cannot be changed after creation).

You can access characters using indexing:

javascript
Copy
Edit
let word = "JavaScript";
console.log(word[0]); // Output: J
Use built-in methods like:

javascript
Copy
Edit
"hello".toUpperCase();  // "HELLO"
"HELLO".toLowerCase();  // "hello"
"JavaScript".includes("Script"); // true
