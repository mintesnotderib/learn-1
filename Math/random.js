function randomness(min,max){
 return Math.floor(Math.random() * (max-min +1))
}
let num=randomness(10,20)

console.log(num) // Output: random between 0 and 10