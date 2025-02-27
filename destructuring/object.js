const person={
 firstName:"mintesnot",
 lastName:"Derib",
 age:19
}
let{firstName,age:ages,lastName,country="ethiopia"}=person;
for(x in person){
 console.log(person[x])
}
console.log(firstName);//mintesnot
console.log(country);//ethiopia
console.log(ages)// 19 change name from age to ages