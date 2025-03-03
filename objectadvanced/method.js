const myarr = [
 ["apple", 200],
 ["mango", 300],
 ["lemon", 100]
]
const myobj = Object.fromEntries(myarr)//create an object from the myarr multidimensional array and also can any key value pairs example map
console.log(myobj)//{ apple: 200, mango: 300, lemon: 100 }
for (const x in myobj) {
 console.log(myobj[x]);
}
const family = 
 [
 { name: "solomon", age: 16 },
 { name: "mintesnot", age: 19 },
 { name: "birtukan", age: 22 }
 ]
function callback({ age }) {

 return age > 18 ? "alchoal" : "noalchol";
}
const newfun = Object.groupBy(family, callback)//create an array bygroup
for (let [x, y] of newfun.alchoal.entries()) {
 console.log(x, y)
}
console.log(newfun.alchoal)//[ { name: 'mintesnot', age: 19 }, { name: 'birtukan', age: 22 } ]

const x={
 name:"mintesnot",
 age:19,
 life:"better"
}
const y=Object.keys(x);
console.log(y);//[ 'name', 'age', 'life' ]