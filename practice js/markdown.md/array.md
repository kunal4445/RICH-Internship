# Why Use Arrays?
- If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
- let car1 = "Saab";
- let car2 = "Volvo";
- let car3 = "BMW";
- However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

# The solution is an array!

- An array can hold many values under a single name, and you can access the values by referring to an index number.
- Creating an Array
- Using an array literal is the easiest way to create a JavaScript Array.

# Syntax:

- const array_name = [item1, item2, ...];      
- It is a common practice to declare arrays with the const keyword.

- Learn more about const with arrays in the chapter: JS Array Const.

# Example
- const cars = ["Saab", "Volvo", "BMW"];
- Spaces and line breaks are not important. A declaration can span multiple lines:

# Example
- const cars = [
- "Saab",
  - "Volvo",
  - "BMW"
- ];
- You can also create an array, and then provide the elements:

# Example
- const cars = [];
- cars[0]= "Saab";
- cars[1]= "Volvo";
- cars[2]= "BMW";
- Using the JavaScript Keyword new
- The following example also creates an Array, and assigns values to it:

# Example
- const cars = new Array("Saab", "Volvo", "BMW");