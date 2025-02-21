function person(name,age,sex){//this is a constructor function that can be used to create many object by using "new" key word
 this.fullName = name;
 this.age=age
 this.gender=sex
 this.result=""
 this.Name=function(){
  return this.fullName + " " +this.nationality;}

}
const myperson=new person("mintesnot","19","M");
const myperson2=new person("zente","19","M");

console.log(myperson.fullName,myperson.age,myperson.gender);
myperson.nationality="Ethiopian"// we can also add new  object properties here
console.log(myperson.nationality)
console.log(myperson.Name())

person.life="good"//we can't add new obbject property by using the name of construcor function
person.prototype.life="good"//we can add new obbject property by using prototype but "good" is the value of any object create by person

console.log(myperson2.life)// the value is good
 console.log(myperson.life)// the value is good

 myperson.grade=function(mark){
    this.result=mark
    return this.result
 }
 
 console.log(myperson.grade(95))

 person.prototype.channge=function(){//this is method that have in any object creat by person constructor
  return "hi everyone"
 }
 console.log(myperson.channge())// return "hi everyone"
 console.log(myperson2.channge())// return "hi everyone"