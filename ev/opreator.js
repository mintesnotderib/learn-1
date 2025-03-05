let x=5;//00000000 00000000 00000000 00000101

x>>=2;// divid by 2^n and round to the smallest integer (00000000 00000000 00000000 00000001 shifts to the right by 2 and add 0 to the left)

 console.log(x);1
 x=-5;//11111111 11111111 11111111 11111011

 x>>=2;// divid by 2^n and round to the smallest integer shifts to the right by 2 and add 1 to the left becausee negative number 11111111 11111111 11111111 11111111

 console.log(x);
 x>>>=2;//shifts to the right by 2 and add 0 to the left instead 1 even negative number and result large postive number 00111111 11111111 11111111 11111111
 console.log(x);
x=5;
 x<<=2;
 console.log(x);//multiply by 2^n 
 let z = true;
let y = false;
z &&= y; // z becomes false
 x = false;
 y = true;
x ||= y; // x becomes true
 x = null;
 y = "Hello";
x ??= y; // x becomes "Hello"

