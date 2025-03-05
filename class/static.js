class car {
 constructor(a){
  this.model=a;
 }
 static hello(x){
  return " you have to call me car.hello() because  i am " + x.model +" "+ this.name;// car b/c static is the class not a created object
 }
}
const mycar=new car("ford");
console.log(car.hello(mycar))