const person = [1, 2, 3, 4];
person.forEach(myfun);
function myfun(value, index, array) {//not creating new array only acess all array elements
 console.log(value * 2);
}

console.log(person);// out put:1 2 3 4

const x = person.map(myfun2);//create new array
function myfun2(value, index, array) {
 return value * 2;
}
console.log(x);//new array

const over5 = x.filter(myfun3)//create nw array called over5
function myfun3(value, index, array) {
 return value > 5;
}
console.log(over5);// only return the arraay over5 which means above the value 5

const flate = [4, 2, 3, 4];
const newflate = flate.flatMap(x => [x, x * 10]);
console.log(newflate); // [4, 40, 2, 20, 3, 30, 4, 40]

const reduced = [1, 2, 3, 4]
let newreduced = reduced.reduce(myfun, 10);
function myfun(total, value, index, array) {
 return total + value;
}
console.log(newreduced); // 20 the sum of all the array elements 10+1+2+3+4=20

let a = reduced.reduceRight(myf2);
function myf2(sum, value, index, array) {
 return sum * value;
}
console.log(a); // 24 the sum of all the array elements 4+3+2+1=10

let under5 = reduced.every(mybool);
function mybool(value, index, array) {
 return value < 5;
}
console.log(under5); // true all the array elements are less than 5

let above3 = reduced.every(mybool1);
function mybool1(value, index, array) {
 return value > 3;
}
console.log(above3); // false all the array elements are  not greater than 3

let some1 = reduced.some(mybool1);
console.log(some1); // true some the array elements are greateerthan 3


  let text="mintesnot derib"
  const arr=Array.from(text);// sreate an array using string,object and any iterable
  console.log(arr); // ["m", "i", "n", "t", "e", "s", "n", "o", "t", " ", "d", "e", "r", "i", "b"]

   let indecie=reduced.keys();
   for (let i of indecie) {
    console.log(i); // 0, 1, 2, 3
   }
   let text1=["banan",'orange',"mangi"]
   const all=text1.entries();
  for (let i of all) {
   console.log(i); }
   /* [ 0, 'banan' ]
   [ 1, 'orange' ]
   [ 2, 'mangi' ]*/
      const month=["januaray", "february", "april", "may"]
      const months=month.with(2,"march")// only take two argumments
      console.log(months); // ["januaray", "february", "march", "april", "may"]
