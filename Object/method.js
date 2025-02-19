const employe=
{
 name:"mintesnot",
 age:"19",
 sallary:50000,
 tax:10,
 total:function(){
  return this.sallary / this.tax;
 },
 net:function(){
  return this.sallary-TAX;
 }
}
let TAX=employe.total();
console.log(TAX);
let ne=employe.net();
console.log(ne);

const person = {
 firstName: "John",
 lastName : "Doe",
 id       : 5566,
 fullName : function() {
   return this.firstName + " " + this.lastName;
 }
};
console.log(person.fullName());

person.name=function(){
  return this.firstName;
}
console.log(person.name())