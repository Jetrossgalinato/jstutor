import { CheatItem } from '../types';

export const cheatsheetData: CheatItem[] = [
  // Beginner
  {
    title: "Declare a Variable (let)",
    description: "Declare a block-scoped variable using let.",
    code: "let x = 5;",
    explanation: [
      "let x = 5; // Declares a variable named 'x' and assigns it the value 5. The variable is block-scoped."
    ].join('\n')
  },
  {
    title: "Declare a Constant",
    description: "Declare a constant variable using const.",
    code: "const PI = 3.14;",
    explanation: [
      "const PI = 3.14; // Declares a constant named 'PI' and assigns it the value 3.14. The value cannot be changed."
    ].join('\n')
  },
  {
    title: "Basic Function",
    description: "Define a simple function.",
    code: "function greet(name) {\n  return 'Hello, ' + name;\n}",
    explanation: [
      "function greet(name) {      // Declares a function named 'greet' with one parameter 'name'.",
      "  return 'Hello, ' + name;  // Returns a greeting string using the provided name.",
      "}"
    ].join('\n')
  },
  {
    title: "Arrow Function",
    description: "Write a concise arrow function.",
    code: "const add = (a, b) => a + b;",
    explanation: [
      "const add = (a, b) => a + b; // Declares a constant 'add' as an arrow function that returns the sum of 'a' and 'b'."
    ].join('\n')
  },
  {
    title: "If Statement",
    description: "Basic conditional statement.",
    code: "if (x > 0) {\n  console.log('Positive');\n}",
    explanation: [
      "if (x > 0) {                  // Checks if 'x' is greater than 0.",
      "  console.log('Positive');    // If true, logs 'Positive' to the console.",
      "}"
    ].join('\n')
  },
  {
    title: "For Loop",
    description: "Iterate using a for loop.",
    code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    explanation: [
      "for (let i = 0; i < 5; i++) { // Loops from i = 0 to i < 5, incrementing i by 1 each time.",
      "  console.log(i);              // Logs the current value of i to the console.",
      "}"
    ].join('\n')
  },
  {
    title: "Array Declaration",
    description: "Create an array.",
    code: "const fruits = ['apple', 'banana', 'cherry'];",
    explanation: [
      "const fruits = ['apple', 'banana', 'cherry']; // Declares a constant array named 'fruits' with three string elements."
    ].join('\n')
  },
  {
    title: "Object Declaration",
    description: "Create an object.",
    code: "const person = { name: 'Alice', age: 25 };",
    explanation: [
      "const person = { name: 'Alice', age: 25 }; // Declares a constant object 'person' with properties 'name' and 'age'."
    ].join('\n')
  },

  // Intermediate
  {
    title: "Array Map",
    description: "Transform an array using map.",
    code: "const doubled = [1, 2, 3].map(n => n * 2);",
    explanation: [
      "[1, 2, 3]                // An array of numbers.",
      ".map(n => n * 2)         // Creates a new array by multiplying each element by 2.",
      "const doubled = ...      // Stores the new array [2, 4, 6] in 'doubled'."
    ].join('\n')
  },
  {
    title: "Array Filter",
    description: "Filter an array using filter.",
    code: "const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);",
    explanation: [
      "[1, 2, 3, 4]                 // An array of numbers.",
      ".filter(n => n % 2 === 0)    // Creates a new array with only even numbers.",
      "const evens = ...            // Stores the new array [2, 4] in 'evens'."
    ].join('\n')
  },
  {
    title: "Destructuring Assignment",
    description: "Extract values from objects or arrays.",
    code: "const { name, age } = person;\nconst [first, second] = fruits;",
    explanation: [
      "const { name, age } = person;    // Extracts 'name' and 'age' properties from the 'person' object.",
      "const [first, second] = fruits;  // Extracts the first and second elements from the 'fruits' array."
    ].join('\n')
  },
  {
    title: "Template Literals",
    description: "Embed expressions in strings.",
    code: "const greeting = `Hello, ${name}!`;",
    explanation: [
      "const greeting = `Hello, ${name}!`; // Uses backticks and ${} to embed the value of 'name' in the string."
    ].join('\n')
  },
  {
    title: "Default Parameters",
    description: "Set default values for function parameters.",
    code: "function multiply(a, b = 2) {\n  return a * b;\n}",
    explanation: [
      "function multiply(a, b = 2) { // Declares a function with parameter 'b' defaulting to 2 if not provided.",
      "  return a * b;               // Returns the product of 'a' and 'b'.",
      "}"
    ].join('\n')
  },
  {
    title: "Spread Operator",
    description: "Expand arrays or objects.",
    code: "const nums = [1, 2, 3];\nconst more = [...nums, 4, 5];",
    explanation: [
      "const nums = [1, 2, 3];         // Declares an array 'nums'.",
      "const more = [...nums, 4, 5];   // Creates a new array by spreading 'nums' and adding 4 and 5."
    ].join('\n')
  },
  {
    title: "Rest Parameters",
    description: "Represent an indefinite number of arguments.",
    code: "function sum(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}",
    explanation: [
      "function sum(...args) {                 // 'args' is an array of all arguments passed to the function.",
      "  return args.reduce((a, b) => a + b, 0); // Sums all arguments using reduce.",
      "}"
    ].join('\n')
  },
  {
    title: "Promise",
    description: "Handle asynchronous operations.",
    code: "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done!'), 1000);\n});",
    explanation: [
      "const promise = new Promise((resolve, reject) => { // Creates a new Promise.",
      "  setTimeout(() => resolve('Done!'), 1000);         // Resolves with 'Done!' after 1 second.",
      "});"
    ].join('\n')
  },

  // Advanced
  {
    title: "Async/Await",
    description: "Write asynchronous code in a synchronous style.",
    code: "async function fetchData() {\n  const response = await fetch('/api/data');\n  return response.json();\n}",
    explanation: [
      "async function fetchData() {                 // Declares an async function.",
      "  const response = await fetch('/api/data'); // Waits for the fetch to complete and stores the response.",
      "  return response.json();                    // Returns the parsed JSON data.",
      "}"
    ].join('\n')
  },
  {
    title: "Class Declaration",
    description: "Define a class and instantiate it.",
    code: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a noise.`);\n  }\n}\nconst dog = new Animal('Dog');",
    explanation: [
      "class Animal {                              // Declares a class named 'Animal'.",
      "  constructor(name) {                       // Constructor takes a 'name' parameter.",
      "    this.name = name;                       // Sets the 'name' property.",
      "  }",
      "  speak() {                                 // Method 'speak' logs a message.",
      "    console.log(`${this.name} makes a noise.`);",
      "  }",
      "}",
      "const dog = new Animal('Dog');              // Creates an instance of Animal with name 'Dog'."
    ].join('\n')
  },
  {
    title: "Modules (Export/Import)",
    description: "Export and import modules.",
    code: "// lib.js\nexport const foo = 42;\n// main.js\nimport { foo } from './lib.js';",
    explanation: [
      "// lib.js",
      "export const foo = 42;           // Exports a constant named 'foo'.",
      "// main.js",
      "import { foo } from './lib.js';  // Imports 'foo' from 'lib.js'."
    ].join('\n')
  },
  {
    title: "Set and Map",
    description: "Use Set and Map collections.",
    code: "const set = new Set([1, 2, 3]);\nconst map = new Map([['a', 1], ['b', 2]]);",
    explanation: [
      "const set = new Set([1, 2, 3]);                 // Creates a Set with unique values 1, 2, 3.",
      "const map = new Map([['a', 1], ['b', 2]]);      // Creates a Map with key-value pairs."
    ].join('\n')
  },
  {
    title: "Optional Chaining",
    description: "Safely access deeply nested properties.",
    code: "const city = user?.address?.city;",
    explanation: [
      "const city = user?.address?.city; // Gets 'city' if 'user' and 'address' exist, otherwise returns undefined."
    ].join('\n')
  },
  {
    title: "Nullish Coalescing",
    description: "Provide a default value if null or undefined.",
    code: "const value = input ?? 'default';",
    explanation: [
      "const value = input ?? 'default'; // Sets 'value' to 'input' if it's not null/undefined, otherwise 'default'."
    ].join('\n')
  },
  {
    title: "Custom Error",
    description: "Create and throw a custom error.",
    code: "class MyError extends Error {}\nthrow new MyError('Something went wrong');",
    explanation: [
      "class MyError extends Error {}                  // Defines a custom error class.",
      "throw new MyError('Something went wrong');      // Throws an instance of the custom error."
    ].join('\n')
  },
  {
    title: "Generator Function",
    description: "Create an iterable generator.",
    code: "function* gen() {\n  yield 1;\n  yield 2;\n}\nfor (let val of gen()) {\n  console.log(val);\n}",
    explanation: [
      "function* gen() {         // Declares a generator function.",
      "  yield 1;                // Yields the value 1.",
      "  yield 2;                // Yields the value 2.",
      "}",
      "for (let val of gen()) {  // Iterates over values yielded by gen().",
      "  console.log(val);       // Logs each value.",
      "}"
    ].join('\n')
  }
];