console.log(typeof NaN)// Not a Number is a typeof number
let x=10
let y="apple"
let z=x / y;

console.log(z)// NaN
console.log(isNaN(z))//true

let mynum=2;
while(mynum != Infinity)
{
 mynum=mynum*mynum;
 console.log(mynum);
}
/* the out put
4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity */
console.log(2/0)//Infinity

console.log(0/0)//NaN
console.log(-1/0)// - Infinity

let myNumber = 32; // The decimal number 32

console.log("Decimal 32 = \n");

console.log("Hexatrigesimal (Base 36):", myNumber.toString(36));
console.log("Duotrigesimal (Base 32):", myNumber.toString(32));
console.log("Hexadecimal (Base 16):", myNumber.toString(16));
console.log("Duodecimal (Base 12):", myNumber.toString(12));
console.log("Decimal (Base 10):", myNumber.toString(10));
console.log("Octal (Base 8):", myNumber.toString(8));
console.log("Binary (Base 2):", myNumber.toString(2));

let a=3;
let b=new Number(a);
console.log(typeof(b),typeof(a));// object and number
console.log(a,b);//3 [Number: 3]



