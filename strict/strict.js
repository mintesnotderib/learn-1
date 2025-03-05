"use strict"
//x=3.14
//console.log(x);// this is an eror
//const y=function(x,x){//the same parameter duplication is also not allowed
// console.log(this)//undefined
//}
//y()

//let x=4;
//delete x; delete also not used in strict mode


//const obj = {};
//Object.defineProperty(obj, "x", {value:0, writable:false});

//obj.x = 3.14; //this also an eror because writable:false

const obj1 = {get x() {return 0} };

obj1.x = 3.14; //TypeError: Cannot set property x of #<Object> which has only a getter

//let eval = 3.14;  

//let arguments = 3.14;    // This will cause an error

//with (Math){x = cos(2)}; // This will cause an error

//eval ("z = 2");
//alert (z);      // This will cause an error