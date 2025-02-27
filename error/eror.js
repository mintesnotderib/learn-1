let x="no";
try{
 if(isNaN(x)) throw "not a number"
}
catch(err) {console.log(err)//

}

let y=2;
try{
 y=z+2; //reference eror
}
catch(err){
 {console.log(err.name)//reference eror
  console.log(err.message)//z is not defined
 }
}
try{
 let y=2;
y.toPrecision(200);//range eror because 1-100 precision is possiible in js
}
catch(err){
 {console.log(err.name)//range eror
  console.log(err.message)//toPrecision() argument must be between 1 and 100
 }
}
try{
 let y=2;
 y.toUpperCase();//type eror
}
catch(err){console.log(err.name)//type eror
 console.log(err.message)//y.toUpperCase is not a function
}

try {
 let y="mintesnot";
 if(isNaN(y)) throw "mintesnot is not a number"

}
catch(err)
{console.log(err)//
//
}
finally{
 console.log("mintesnot is a software engineer student!")
}