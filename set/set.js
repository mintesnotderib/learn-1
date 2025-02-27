const x = new Set([1, 2, 3, 4]);
console.log(x); // Output: Set { 1, 2, 3, 4 }
for(const num of x){
 console.log(num); // Output: 1, 2, 3, 4
}
x.add(9);

console.log(x); // Output: Set { 1, 2, 3, 4, 9 }
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
console.log(x.has(1))//true
 console.log(x.has(10))//false
 let text=2;
  x.forEach(function(num){
   text**=num;
   console.log(text);
  })
  for(const num of x){
   console.log(num); // Output: 1, 2, 3, 4,9
  }
   const myitreator=x.values();
   for(const x  of myitreator){
     console.log(x); // Output:1 2 3 4 9
   }
   console.log(myitreator); // Output: