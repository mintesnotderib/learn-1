const x=new Map([["apple",1],["orange",2],["mango",3]])//[key,value]
 for(const[c,d]  of x){
   console.log(c,d);
 }
 console.log(x.get("apple"))//1
 x.set("lemons",4);
 console.log(x)//Map(4) { 'apple' => 1, 'orange' => 2, 'mango' => 3, 'lemons' => 4 }
  x.delete("orange");
 console.log(x)//Map(3) { 'apple' => 1, 'mango' => 3, 'lemons' => 4 }
 console.log(x.has("orange"))//false

  x.forEach(function(value,key)
{
    console.log(key,value)
})
 console.log(x.size)//3
 for(let y of x.entries()){
  console.log(y)
 }
 for(let y of x.keys()){// only return the keys

  console.log(y)
 }
 let sum=0;
 for(let y of x.values())
 {
  sum+=y; 
 }
  console.log(sum)
  

  const a={name:"belachew"}
  const b={name:"semsmacjew"}
  const c={name:"deblilachew"}
   const d=new Map();
   d.set(a,500);
   console.log(d.get(a))//500 object as a key