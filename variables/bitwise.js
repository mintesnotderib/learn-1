console.log(4&3)//0101 & 0011 → 0001

console.log(4|3)//0101 | 0011 → 0111
console.log(4^3)//	0101 ^ 0011 → 0110


console.log(4<< 2)//Shifts the bits of a number to the left by a specified number of positions.fill the right most with zeros
console.log(-4>> 2)/*Shifts the bits of a number to the right by a specified number of positions.Preserves 
the sign (i.e., keeps the leftmost bit the same for negative numbers)
*/
console.log(-4>>> 2)/*Shifts the bits to the right, but fills the leftmost bits with zeros (does not preserve sign).*/

let x=1;
x &&=3//If the first value is true, the second value is assigned.other wise the first value is assigned
console.log(x)
x ||=3//If the first value is false, the second value is assigned.other wise the first value is assignedconsole.log(x)
console.log(x)
let y;

console.log(y??4)//if the first value is undefined or null, the second value is assigned. otherwise the first value is assigned