let d=new Date();
console.log(d.getHours());
console.log(d.toLocaleString())
console.log(d.getMinutes());//return now minute
console.log(d.getSeconds());//return now second

console.log(d.getTimezoneOffset());//returns the difference (in minutes) between local time an UTC time:
console.log(d.getDay());// return the week day in number (0-6)
console.log(d.getMonth());// return the month
console.log(d.getDate());//return the date

console.log(d.getFullYear());// return the year
console.log(d.getTime());// The getTime() method returns the number of milliseconds since January 1, 1970:
console.log(Date.now());// The method returns the number of milliseconds since January 1, 1970: