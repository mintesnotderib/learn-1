let firstName="mintesnot"
let lastName="Derib";

console.log(`Hello, ${firstName} ${lastName}!`);//possible because templatr(` `) opreator

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total);