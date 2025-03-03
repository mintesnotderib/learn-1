const car=
{
 brand:"BMW",
 model:"5 Series",
 year:2021,
 color:"blue"
}
let text="";
for(let x in car){

 text+=car[x]+" ";

}

console.log(text);
const x=Object.values(car);//create x array [ 'BMW', '5 Series', 2021, 'blue' ]
console.log(x);
console.log(x[0])//

console.log(car);

for(let[names,value] of Object.entries(car))
{
  console.log(names,value);}

  console.log(JSON.stringify(car));
const mymap=new Map(Object.entries(car))
console.log(typeof mymap,mymap)
console.log(mymap.get("brand"))//BMW

const w=Object.entries(car)
console.log(w,typeof(w));
