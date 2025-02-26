/*
everry thing is true unless it is 0,null,undefined,NAN
,false and empty sting


*/

console.log(Boolean(0))//false
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false
console.log(Boolean(NaN))//false
console.log(Boolean(''))//false

console.log(Boolean(10))//true

console.log(Boolean('hello'))//true

console.log(Boolean(true))//true

console.log(Boolean('false'))//true

console.log(Boolean('0'))//true

console.log(Boolean('null'))//true
console.log(Boolean(-10))//true
console.log(Boolean(-0))//false

