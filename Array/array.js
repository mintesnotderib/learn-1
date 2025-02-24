const car=["toyota","merchedes","hamer"]
console.log(car.toString());//toyota,merchedes,hamer
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
let text="";
car.forEach(myfunction)
  console.log(text);//toyotamerchedeshamer

function myfunction(value){
  text=text+value;
}
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