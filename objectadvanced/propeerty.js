const person = {
  name: "mintesnot",
  age: 19,
  language: "amharic"
}
Object.defineProperty(person, "year", { value: 1000, enumerable: true })//by default the year property is non enumerable to enumerable we must say enumerable 
console.log(person.year)
Object.defineProperty(person, "age", { value: 20 })
console.log(person.age)//npw it would be 20
Object.defineProperty(person, "language", { writable: false });
person["language"] = "english";
person["name"] = "Zente";
console.log(person.language);// amharic it is read only we can't change it  because writable:false 
console.log(person["name"]);// zente because by default writable is true and we can change it

Object.defineProperty(person, "name", { enumerable: false, configurable: true})//when use enumrable false the  bame proerty not include or in any enumerable thing
for (let x in person) {
  console.log(person[x])//name Zente not included

}
delete person.name//when we say configurable:true we can delete the property
console.log(person.name)//undefined
console.log(Object.values(person))//there is no Zente
console.log(Object.getOwnPropertyNames(person))//now zente is displayed  this the only way to display enumerable:falses in enumerable format

Object.defineProperty(person, "fullName", {
  get: function () {
    return `${this.name} is ${this.age} and he speaks ${this.language} at ${this.year}`
  }

})
console.log(person.fullName)


const obj = { counter: 0 };

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
  get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
  get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
  set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
  set: function (value) { this.counter -= value; }
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;

obj.increment;

obj.decrement;
console.log(obj.counter)