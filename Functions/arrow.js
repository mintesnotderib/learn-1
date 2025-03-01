let myfunction = (a, b) => {
 console.log(this); // Logs `{}` in Node.js
 return a * b;
};

let x = myfunction(4, 2);
console.log(x); // 8

// Correct function call
myfunction(2, 3); 

// Corrected function declaration
function myfuncton(a, b) {
 console.log(this);
}

// Import multiply (ensure fun1.js exports it properly)
import { multiply } from "./fun1.js";
console.log(multiply(2, 3)); // 6
