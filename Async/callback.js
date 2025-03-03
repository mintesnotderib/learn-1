
let x = "";
function display(name) {
 x = `hi ${name}`;
}
function pass1() {
 display("Zente");
}
function pass2() {
 display("Mintesnot");
}
pass1()
pass2()
console.log(x)// hi Mintesnot

let displayer = (sum) => console.log(sum);
const calculator = function (num1, num2, callback) {
 let sum = num1 + num2;
 callback(sum);
}
calculator(5, 4, displayer);





const mynumbers = [5, 2, 7, 9, 6, -3, -2, 6, -9, 3, -10];
const mynums=removenegs(mynumbers,(x)=>x>=0)
function removenegs(number, callback) {
 const myarray = [];
 for (let x of number) {
  if (callback(x)) {
   myarray.push(x)
  }
 }
return myarray;
}
console.log(mynums);