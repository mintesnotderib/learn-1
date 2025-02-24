const car=["toyota", "merchedes","yango"]
car.push("volvo");//add volvo to the last

for(let i=0; i<car.length; i++){
  console.log(car[i]);
}
car.pop();//remove volvo from the last
for(let i=0; i<car.length; i++){
 console.log(car[i]);
}
 car.shift();//remove toyota from the begining
 for(let i=0; i<car.length; i++){
  console.log(car[i]);
 }
 car.unshift("Honda");//add honda to the begining with out removing the first element
 for(let i=0; i<car.length; i++){

  console.log(car[i]);
 }
 let a=car.join("$")//Honda$merchedes$yango
console.log(a);
delete car[0];
console.log(car[0]);//undefined instead we are gonna use car.shift() 

const childern1=["abebe","alemu","kebede"];
const childern2=["demeku","meshinashwork","yebrgua"];
const childern3=["debesay","mazengiya","kelemua"];
const childern4=["tolosa","gemeechu","leleisa"];
const childern5=childern1.concat(childern2);//new array contain 6 elelments

console.log(childern5);
const children6=childern1.concat(childern2,childern3)//new array contain 9 elements

console.log(children6);

const children7=childern1.concat(childern2,childern3,childern4)//new array contain 13 elements

console.log(children7);
const children8=childern1.concat("gemersa");
children8.push("amensisa")
children8.push("janhoy");

console.log(children8);
console.log(children8.copyWithin(2,0))//start from index 2 copy the elemnt of start index 0 [ 'abebe', 'alemu', 'abebe', 'alemu', 'kebede', 'gemersa' ]
console.log(children8);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2,0,2))//copyWithin() copies array elements to another position in an array, overwriting existing values
//[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]

const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();

console.log(newArr); // [1, 2, 3, 4, 5, 6]
const myArra = [1, 2, 3, 4, 5,6];//create new array first flat 
const newArra = myArra.flatMap(x => [x, x * 10]);// the flatMap return a function to the individual element of the array

console.log(newArra); // [1, 10,2,20, 3, 30, 4, 40, 5, 50, 6, 60]