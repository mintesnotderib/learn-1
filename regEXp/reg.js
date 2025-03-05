let result=`Mintesnot the legend man in this world he have a great venture to change him from rhe scratch
he hope he can get find a best way to change the whole world dand he also have a great life`;
let value=result.search(/^he/mi)//at the begining of new line return an index
console.log(value)
let result1="hehecancan"
let Match=result1.match(/(he)(can)/);//he followed by can
console.log(Match)/*
[
 'hecan',
 'he',
 'can',
 index: 2,
 input: 'hehecancan',
 groups: undefined
]*/
let a="minte the one";
console.log(a.match(/\s/g))
console.log(/e/.test("The best things in life are free!"));// true
const obj = /e/.exec("The best things in life are free!");
console.log(obj)
let text = "Hellooo World! Hello W3Schools!"; 
 result = text.match(/o+/g);//[ 'ooo', 'o', 'o', 'oo' ]
 console.log(result)