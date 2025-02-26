let d=new Date()// now time
 console.log(d.toString());
 d=new Date(2022 ,1, 20,12,34,56,66) // date in year, month, day,hour,minute,second, millisec you can use upto two arguments in UTC format
 console.log(d);
 d=new Date(86400000);//when we used only one argument js assume it is milisec  and return the date 1970+milisec;
 console.log(d);//1970-01-02T00:00:00.000Z
 console.log(d.toString());// Fri Jan 02 1970 09:00:00 GMT+0900 (Yakutsk Standard Time)

 console.log(d.toDateString());//Fri Jan 02 1970 
 console.log(d.toUTCString());// Fri, 02 Jan 1970 00:00:00 GMT
 console.log(d.toISOString());// 1970-01-02T00:00:00.000Z  this is the default oned = new Date("2015-03");



 d = new Date("2015-03"); console.log(d);
 d = new Date("2015"); console.log(d);
 d = new Date("2015-03-25T12:00:00Z");
 console.log(d);

 d=Date.parse("2015-3-24"); console.log(d);//convert the date to milisecond start from 1970