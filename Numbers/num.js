let x="10";
let y="11";
let z=x*y;// 110 javascript try to convert this string to a number because of multiplication sign
z=x / y;// 0.909090 javascript try to convert this string to a number because of mdvisionsign

console.log(z);
z=x - y;// -1 javascript try to convert this string to a number because of minus sign

console.log(z);
 let a=0.1;
 let b=0.2;
 let c=a+b;// 0.30000000000000004 javascript try to convert this floating point number to a number because of the decimal point
 console.log(c);
  a=0.1*10;b=0.2*10;c=(a+b)/10;console.log(c);//0.3 we can fix it in this way
  