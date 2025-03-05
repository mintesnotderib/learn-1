class parent {
 constructor(name, age) {
  this.bank = name;
  this.wait = age;
 }
 family(x) {
  return "the man is " + x + "years old";
 }
}
class member extends parent {
 constructor(he,ab,ability) {
  super(he, ab)
this.effecincy=ability;

 }
 show() {
  return " birhanu name at " + this.bank + " from " + this.wait+" and he is a "+this.effecincy;
 }
}
const myfam = new member("BOA", 2025," good performancer ");
console.log(myfam.family(28));
console.log(myfam.show())
console.log(myfam,parent,member)
