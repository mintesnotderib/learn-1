let day = new Date().getDay();
switch (day) {
 case 0:
  console.log("Today is Sunday");
  break;
 case 1:
  console.log("Today is Monday");
  break;
 case 2:
  console.log("Today is Tuesday");
  break;
 case 3:
  console.log("Today is Wednesday");
  break;
 case 4:
  console.log("Today is Thursday");
  break;
 case 5:
  console.log("Today is Friday");
  break;
 case 6:
  console.log("Today is Saturday");
  

 default:
  console.log("Invalid day");

 
}
let x="1";
switch (x)
{
 case 1:
  console.log("x is 1");
  break;
  default :
  console.log("x is not 1");// this is the result because switch uses === expression
  
}