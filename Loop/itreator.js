function myfunction(){
  let n=0;
  return {
   next: function(){
    n+=10;
    return {value:n,done:false}
  }
}};
const n=myfunction();

console.log(n.next().value); //10

function my() {
 let n = 0;
 return {
   next: function() {
     n += 10;
     if (n > 50) { // Stop when n exceeds 50
       return { value: undefined, done: true };
     }
     return { value: n, done: false };
   }
 };
}

const x = my();
console.log(x.next()); // { value: 10, done: false }
console.log(x.next()); // { value: 20, done: false }
console.log(x.next()); // { value: 30, done: false }
console.log(x.next()); // { value: 40, done: false }
console.log(x.next()); // { value: 50, done: false }
console.log(x.next()); // { value: undefined, done: true }  <-- Stops here
console.log(x.next()); // { value: undefined, done: true }  <-- Stays done
console.log(x.next().value);//undefined

const mynum={};
 mynum[Symbol.iterator]=function()
 {
   let n=0;
   done=false;
   return {
     next(){
       n+=10;
       if(n>50) done=true;  // Stop when n exceeds 50
       return {value:n,done:done}
     }
   }
 }
 for(let i of mynum){
   console.log(i);
 }