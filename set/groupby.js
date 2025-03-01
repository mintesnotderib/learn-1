const family=[
 {name:"solomon",age:16},
 {name:"mintesnot",age:19},
 {name:"birtukan",age:22}
]
function callback({age}){
 return age>18?"alchoal":"noalchol";
 }
 const decesion=Map.groupBy(family,callback);
 for(let x of decesion.get("alchoal"))
 {
  console.log(x.name + " can drink alchols")
 }
 for(let x of decesion.get("noalchol"))
 {
  console.log(x.name + " can't drink alchol")
 }
console.log(decesion)/*Map(2) {
 'noalchol' => [ { name: 'solomon', age: 16 } ],
 'alchoal' => [ { name: 'mintesnot', age: 19 }, { name: 'birtukan', age: 22 } ]
}*/