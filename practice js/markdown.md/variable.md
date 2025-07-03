# Types of Variables in JavaScript

In JavaScript, variables are used to store data values. There are **three main ways** to declare variables:

---

## 1. `var`

    - The oldest way to declare a variable (used before ES6).
    - **Function-scoped**.
    - Can be **redeclared** and **updated**.
    - Not recommended for modern code due to unexpected behaviors.

    ```javascript
    var name = "Alice";


## 2. let
       - Introduced in ES6 (2015).

       - Block-scoped.

       - Can be updated, but not redeclared in the same scope.

        -Best used for variables that change over time.

       - let age = 25;

3. const
- Also introduced in ES6.

- Block-scoped.

- Cannot be updated or redeclared.

- Best for variables that should remain constant.


const pi = 3.14;

- JavaScript String Methods
- JavaScript provides many built-in methods to work with strings. Here are some of the most commonly used:

## 1 .length
- Returns the number of characters in the string.
- let text = "JavaScript";
- console.log(text.length); // 10

## 2. toUpperCase()
- Converts the string to uppercase.
- "hello".toUpperCase(); // "HELLO"

## 3. toLowerCase()
- Converts the string to lowercase.
- "HELLO".toLowerCase(); // "hello"

## 4. includes()
- Checks if a substring exists in the string. Returns true or false.
- "JavaScript".includes("Script"); // true

## 5. indexOf()
- Returns the index of the first occurrence of a specified value. Returns -1 if not found.
- "JavaScript".indexOf("S"); // 4
## 6. slice(start, end)
- Extracts a section of the string and returns it as a new string.
- "JavaScript".slice(4, 10); // "Script"
## 7. replace(old, new)
- Replaces a part of the string with another value (only the first match).
- "Hello World".replace("World", "JavaScript"); // "Hello JavaScript"
## 8. trim()
- Removes whitespace from both ends of a string.
- "  Hello  ".trim(); // "Hello"
## 9. split(separator)
- Splits the string into an array based on the specified separator.
- "apple,banana,orange".split(","); 
// ["apple", "banana", "orange"]
## 10. charAt(index)
- Returns the character at the specified index.
- "JavaScript".charAt(0); // "J"
