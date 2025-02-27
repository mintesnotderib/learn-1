 x=3
console.log(x)
let y;
console.log(y);
let z="mintesnot"+" "+"derib";
console.log(z)
let V= "5" + 2 + 3;
 console.log(V)
 function greet(name) {
  return `Hello, ${name}!`;
}

// Example usage:
let userName = "Alice";
console.log(greet(userName));
console.log(2**3);
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
console.log(result);

// Declare variables using var, let, and const
var name = "Alice"; 
let age = 25;
const city = "New York";

// Test binding to global object (Node.js uses `global`, not `window`)
console.log(global.name);  // ❌ undefined (var does NOT bind to global in Node.js)
console.log(global.age);   // ❌ undefined
console.log(global.city);  // ❌ undefined

console.log(this.name);    // ❌ undefined
console.log(this.age);     // ❌ undefined
console.log(this.city);    // ❌ undefined

// Define a function
function checkThis() {
  console.log(this);       // ✅ global object in non-strict mode, undefined in strict mode
}
checkThis();

// Define an object with a method
const obj = {
  name: "Bob",
  showThis: function() {
    console.log(this.name);  // ✅ "Bob" (this refers to the object)
  }
};
obj.showThis();

// Define an arrow function
const arrowFunc = () => {
  console.log(this); // ✅ {} (empty object in Node.js, different from browsers)
};
arrowFunc();
