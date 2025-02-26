const person={
  fullname:"mintesnot",
  age:19,
  place:"nefas mewucha"
}
for(let x in person){
  console.log(x,person[x]);
}
let y="age";

console.log(person[y]);



const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
/*Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.*/

console.log(txt);

let sum=0;
numbers.forEach(myfunction);

function myfunction(value, index, array)  {
  sum+=value;
}
console.log(sum);