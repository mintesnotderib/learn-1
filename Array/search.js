const car = ["toyota", "mercheds", "hamer", "toyota"];
console.log(car.indexOf("toyota"))// 0
console.log(car.lastIndexOf("toyota"))// 3

const numbers = [4, 9, 4, 16, 25, 29];
let first = numbers.find(myFunction);


function myFunction(value, index, array) {
  return index > 3 && value > 28;// return the first value > 28 start from index 3 includig index 3
}

console.log(first); // Output: 29  the first value above 25 and greater index 3

const number = [4, 9, 16, 25, 29];

let avg = number.reduce((sum, num) => sum + num) / number.length;

let firs = number.find((value) => value > avg);

console.log(firs); // Output: 25

function myfun(value, index, array) { return value > 18; }
console.log(numbers.findIndex(myfun)); // Output: 3  return the index satisfy this condition

function mylast(value, index, array) {

  return value > 18
}
console.log(numbers.findLast(mylast)); // 29 start from the last but the same as find
console.log(numbers.findLastIndex(mylast)); // the same to findindex but start from te last