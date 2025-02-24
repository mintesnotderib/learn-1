let x = 9.656;

console.log(x.toExponential());   // Default exponential format
console.log(x.toExponential(2));  // 2 decimal places in exponential notation
console.log(x.toExponential(4));  // 4 decimal places in exponential notation
console.log(x.toExponential(6));  // 6 decimal places in exponential notation

console.log(x.toFixed(0));  // Rounded to 0 decimal places
console.log(x.toFixed(2));  // Rounded to 2 decimal places
console.log(x.toFixed(4));  // Rounded to 4 decimal places
console.log(x.toFixed(6));  // Rounded to 6 decimal places

console.log(x.toPrecision());  // return the number with specfied number of length 9.656

console.log(x.toPrecision(2));  // 9.7

console.log(x.toPrecision(4));  //9.656

console.log(x.toPrecision(6));  // 9.65600
console.log(x.valueOf())//9.656
console.log(x.toString())//9.656

console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Number("10"));     // 10
console.log(Number("  10"));   // 10 (ignores leading spaces)
console.log(Number("10  "));   // 10 (ignores trailing spaces)
console.log(Number(" 10  "));  // 10 (ignores spaces around)
console.log(Number("10.33"));  // 10.33
console.log(Number("10,33"));  // NaN (comma not valid for numbers)
console.log(Number("10 33"));  // NaN (space not allowed between numbers)
console.log(Number("John"));   // NaN (not a number)

console.log(Number (new Date("1970-01-01")));//0 return the milisecond start at 1970 and continue to 
console.log(Number (new Date("1970-01-02")));//86400000 return the mili secon from 01 1970 to 02 1970

console.log(parseFloat("10"));       // 10
console.log(parseFloat("10.33"));    // 10.33
console.log(parseFloat("10 6"));     // 10 (Stops at first non-numeric character)
console.log(parseFloat("10 years")); // 10 (Stops at " years")
console.log(parseFloat("years 10")); // NaN (Starts with non-numeric characters)
console.log(parseInt("10"));        // 10
console.log(parseInt("10.33"));     // 10 (Stops at the decimal point)
console.log(parseInt("10 years"));  // 10 (Stops at " years")
console.log(parseInt("years 10"));  // NaN (Starts with a non-numeric character)
console.log(parseInt("  10"));      // 10 (Spaces before the number are ignored)
console.log(parseInt("10 20"));     // 10 (Stops at space)
console.log(parseInt("0x10"));      // 16 (Hexadecimal number)
console.log(parseInt("1010", 2));   // 10 (Binary number, base 2)
console.log(parseInt("ff", 16));    // 255 (Hexadecimal base 16)



