const family = {
 name: "Kidus",
 age: 4
}
Object.preventExtensions(family);//it pervent to add any property
family.sex = "M";
console.log(family.sex)//undefined
console.log(Object.isExtensible(family))//returns false
delete family.age;//we can delete even we can't add to it
console.log(family.age)

const x = [1, 2, 3, 4];
Object.preventExtensions(x)//the same is true because array also an object
// we can't add x.push(5);
delete x[2];//we can delete even we can't add to it
console.log(x[2]);
console.log(Object.isExtensible(x))//returns false
Object.seal(family);//after this time we cant add and delete the property
delete family.name;// the name is not delete 
console.log(family.name)//now the name is  kidus it wasn't delete
family.name="Solomon";
console.log(family.name)//solomon we can modify in seal
//we can use seal to the array
let y=Object.isSealed(family)
console.log(y)//true
Object.freeze(x)// it is the same to seal but in ythis we can't modify also
x[0]=9;

console.log(x[0])//1
console.log(Object.isFrozen(x))// returns true
