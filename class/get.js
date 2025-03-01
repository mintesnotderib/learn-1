class person {
 constructor(a){
  this.name=a;
 }
 get show(){
  return this.name;
 }
 set show(x){
  this.name=x;
 }
}
const obj=new person("Mintesnot");
console.log(obj.show);//this is time we use a get method no parenthesise
obj.show="solomon";//now we transfer for a set and change the element this.name
console.log(obj.show)