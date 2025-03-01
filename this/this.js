console.log(this)//{}
function name()
{
 //"use strict"; in strict this is undefined but in the non strict mode it is a global object
 console.log("mintesnot in here")
 console.log(this)

}
name();

const full=
{fullname:function(){
 return this.firstname +" "+this.lastname;
}}
const names={
 firstname:"mintesnot",
 lastname:"derib"
}
let x=full.fullname.call(names);
console.log(x);
 x=full.fullname.bind(names);
console.log(x);

const abebe={
 age:19,
 sex:"M",
 life:"better",
 info:function(){
return this.age+" "+this.sex+" "+this.life+" ";
 }
}
const alemu={
 age:29,
 sex:"F",
 life:"worse"
}

let borrow=abebe.info.bind(alemu);
console.log(borrow)