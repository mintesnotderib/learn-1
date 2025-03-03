function me(x){
 console.log(this)
 return this.firstname+" " + this.lastname +" and he is a "+x+" years old ";
 
}
const person={
 firstname:"Mintesnot",
 lastname:"derib",
 greeting:function(city,country){
  return this.name+": hi mintesnot god bless you"+this.city+this.country ;
 }
}
const x=me.call(person,19);
console.log(x)
console.log(person)
const person1={
 name:"helen"
}
const love=person.greeting.call(person1);
console.log(love);

const car={
 greeting2:function(city,country){
  return this.name+" live in "+city+country;
 }
}
const life=car.greeting2.apply(person1,["Nefas mewucha ,","Ethiopia"])
console.log(life)


console.log(Math.max.apply(null,[4,5,6]));
console.log(Math.max(...[1,2,3]));

const names = {
 firstname: "mintesnot",
 lastname: "derib",
 display: function() {
   return this.firstname + " " + this.lastname;
 }
};

let greet = names.display.bind(names);

setTimeout(() => {
 console.log(greet()); // Call the function and log the result after 3 seconds
}, 3000);
