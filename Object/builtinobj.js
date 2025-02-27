const person =
{
 name: "mintesnot",
 age: 19,
 place: "nefas mewucha"
}
 
const person2 = { name: "zente",grade:"A" };
Object.assign(person, person2);
console.log(person.name)//is zente no lomger mintesnot
console.log(person.grade)

console.log(person.constructor);//tell to me the person is an object
console.log(person);
let x=[1,2,3]
console.log(x.constructor);//tells to me x is an array

const man=Object.create(person)//create new object man like a person
 console.log(man.name)
 
let z="mintesnot".toUpperCase()
 console.log(z)