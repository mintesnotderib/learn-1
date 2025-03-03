//x()// this is an eror because we can't acess before defenation
const x = function (x) {
 x="Zente"
 return "mintesnot is in here"
}
let name="mintesnot";
console.log(x(name));
console.log(name);//here is mintesnot because always function call by value

(function () {
 console.log("i call myself")
})();

function sum(a, b = 3) {//default parameter
 console.log(arguments.length)// 2 the recived argument length
 return a + b
}
let c = sum(3) * 2;
console.log(c)//14 
console.log(sum.toString())/*function sum(a,b){
 console.log(arguments.length)// 2 the recived argument length
 return a+b
}*/
let total = 0, ave = 1;
const average = function (...args) {
 for (let x of args) {
  total += x;
  ave = total / arguments.length
 }
}
average(4, 5, 3, 8, 7, 9, 1, 6, 8, 9, 3)
console.log(total, ave)

function arr(){//arguments is an array and always contain the passed argument when it claa evn though the parameter is lessthan the arguments
 let max=arguments[0];
 for(let i=0;i<arguments.length;i++){
  if(arguments[i]>max)
   max=arguments[i];}
  return max;

}
console.log(arr(100,34,56,78,23))

function myage(person){
 person.age=19
}
const person={
 age:25
}
myage(person)//pass an argument by reference not by value when our argument is object
console.log(person.age)//19
