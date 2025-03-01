class person {
 constructor(a, b) {
  this.name = a;
  this.age = b;
 }
 slogan() {
  return this.name + " is the great man at the age of " + this.age;
 }
}
const mintenot = new person("mintesnot", 19);
for (let x in mintenot) {
 console.log(x, mintenot[x])
}
console.log(mintenot.slogan())

class car {
 constructor(a,b,c){
  this.model=a;
  this.year=b;
  this.price=c;

 }
life(x,y)
{
 let z=`my car model ${this.model} bought in ${this.year} and service me for ${x} year when i was a ${y} ,the price of car is ${this.price}`
return z;

}

}
const mycar=new car("ford",2015,1000)
console.log(mycar.model)
console.log(mycar.life(25,"student"))

//by default javascript class uses "strict mode"