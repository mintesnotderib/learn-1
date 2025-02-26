const d=new Date();
d.setFullYear(2020);//fis the year to 2025
console.log(d);

d.setMonth(11);//set the month to december

console.log(d);

d.setDate(31); //set the day to 31st

console.log(d);

d.setHours(23); //set the hours to 23rd

console.log(d);

d.setMinutes(59); //set the minutes to 59th

console.log(d);
 let today=new Date();
 let someday=new Date();
 someday.setFullYear(2100,3,14);
 if(someday>today){
  console.log("today is the day before " + someday)
 }
 else{
  console.log("today is the day after " + someday)
 }
