let x=999999999999999999
console.log(x);//1000000000000000000
let y=BigInt(x)//hat is used to store large  numbers with accurate values
console.log(y);
let z=9999999999999999999999n//this also another way of using BigInt
console.log(z);
let a;

console.log(a);//undefined
console.log(typeof(a));//undefined

let b=123467890765435788776575;
let c=123467890765435788776574;
console.log(b===c);// true even though the numbeer in the last digit is differnt b/c js have limeted preceion

let d=BigInt(123467890765435788776575);

console.log(d===c);// false the use of bigint
 let w=Number.MAX_SAFE_INTEGER;
 console.log(w);//9007199254740991 above this value we must use BigInt
 w=Number.MIN_SAFE_INTEGER;
 console.log(w);//-9007199254740991 below this value we must use BigInt
 console.log(Number.isSafeInteger(w))//true 
 w=90071992547409912;
 console.log(Number.isSafeInteger(w))//false
 console.log(Number.isInteger(10.5))//false