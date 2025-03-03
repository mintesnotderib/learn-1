const car=["toyota","merchedes","hamer"]
const x=car.toString();
console.log(x);//toyota,merchedes,hamer
console.log(car);//[ 'toyota', 'merchedes', 'hamer' ]
console.log(typeof(car))// object b/c array is the special type of object

// Create an array that holds different types of values
let myArray = [];

// Storing a function (Date.now)
myArray[0] = Date.now;

// Storing a function (myFunction)
function myFunction() {
  console.log("This is my function!");
}
myArray[1] = myFunction;

// Storing an object (myCars)
let myCars = ["Volvo", "BMW", "Audi"];
myArray[2] = myCars;

console.log(myArray);

// Call the function stored in the array
console.log(myArray[0]());  // Outputs the current timestamp

myArray[1]();  // Outputs: "This is my function!"

console.log(myArray[2]);  // Outputs: ["Volvo", "BMW", "Audi"]

for(let i=0; i<car.length; i++){
  console.log(car[i]);
}
let text=" ";
car.forEach(myfunction)
  

function myfunction(value){
  text=text+value;
}
console.log(text," ");//toyotamerchedeshamer
car.push("volvo");
for(let i=0; i<car.length; i++){
  console.log(car[i]);
}
car[5]="Audi";

for(let i=0; i<car.length; i++){
  console.log(car[i]);
}
/*toyota
merchedes
hamer
volvo
undefined
Audi */


const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

// Using for...of loop to iterate over cars
for (let car of myObj.cars) {
  console.log(car.name);  // Log the car name
  
  // Using for...of loop to iterate over the models of each car
  for (let model of car.models) {
    console.log(model);  // Log each car model
  }
}
