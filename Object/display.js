const car=
{
 brand:"BMW",
 model:"5 Series",
 year:2021,
 color:"blue"
}
let text="";
for(let x in car){
 console.log(car[x]);

}

console.log(text);

console.log(Object.values(car));

console.log(car);

for(let[names,value] of Object.entries(car))
{
  console.log(names,value);}

  console.log(JSON.stringify(car));
