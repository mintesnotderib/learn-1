const myObj=
{
 name:"Mintesnot",
 age:19,
 mygrade:[
  {course:"C++",allsemester:[95,91]},
  {courses:"english",allSemster:[74.5,80.5]},
  {coursess:"maths",allsemester:100}
 ]
}
let _1_semster=myObj.mygrade[0].allsemester[0];
console.log(_1_semster);
let _2_semster=myObj.mygrade[1].allSemster[1];
let x=_2_semster.toFixed(2);
console.log(myObj.name,myObj.age,myObj.mygrade[1].courses,x)
