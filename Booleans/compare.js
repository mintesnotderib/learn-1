

let voteable = (12 < 18) ? "Too young" : "Old enough";

console.log(`You are ${voteable} to vote.`);
let name1=null;
let id="bdu1602150";
console.log(name1 ?? id)
/*The ?? operator returns the first argument 
if it is the left argumment not nullish (null or undefined).
 Otherwise it returns the second. */
 const car={type:"volvo",year:"2015",month:"jan"}
 console.log(car.color)

 const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your age: ', (age) => {
  age = Number(age);  // Convert the input to a number
  let greeting;

  if (age < 18) { 
    greeting = "Good age"; 
  } else {
    greeting = "You're an adult";
  }

  console.log(greeting);
  rl.close();  // Close the readline interface
});
