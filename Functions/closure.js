function mycounter(){
 let counter=0;
 return function(){
  return ++counter;
 }
}
const add=mycounter()

console.log(add())