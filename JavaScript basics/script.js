// Subtask 2.1: Updated Variables
let name1 = "Francine";
let name2 = "Rumi";
let age = 20; 
const isStudent = true;

// Subtask 2.2: Displaying the new names
console.log("Name 1: " + name1);
console.log("Name 2: " + name2);
console.log("Age: " + age);
console.log("Is Student?: " + isStudent);

// Subtask 3.1: Data Types
let numberExample = 10;
let stringExample = "Hello World";
let booleanExample = false;
let arrayExample = [1, 2, 3, 4];
// Putting the new names into an Object
let objectExample = { 
    student1: 'Francine', 
    student2: 'Rumi' 
};

// Subtask 3.2: Check Data Types
console.log("Type of number Example: " + typeof numberExample);
console.log("Type of string Example: " + typeof stringExample);
console.log("Type of array Example: " + typeof arrayExample); // Returns 'object'
console.log("Type of object Example: " + typeof objectExample);

// Subtask 4.1: Arithmetic
console.log("Addition: " + (10 + 5));
console.log("Subtraction: " + (10 - 5));
console.log("Multiplication: " + (10 * 5));
console.log("Division: " + (10 / 5));

// Subtask 4.2: Logical Operators
let x = true;
let y = false;

console.log("x AND y: " + (x && y)); // false
console.log("x OR y: " + (x || y));  // true
console.log("NOT x: " + (!x));       // false

console.log("All outputs displayed successfully!");