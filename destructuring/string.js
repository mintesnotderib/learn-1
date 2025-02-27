let name1 = "Mintesnot Derib";
let [a, , , b, c, d] = name1;// to escape 
console.log(b);
let { [0]: v, [10]: h } = name1;// another way to escape
console.log(h)
const x = ["hello", "guys", "we", "are", "brothers"]
let [A, B, C] = x;
console.log(A)//hello
let [, , , , D] = x;
console.log(D)
let { [3]: E, [2]: F } = x;
console.log(E)
let [M, N, ...rest] = x;//create new array called rest [ 'we', 'are', 'brothers' ]
console.log(rest[0])// we



const K=new Map([
 ["alemu","50kg"],
 ["abebe","60kg"],
 ["zeleke","70kg"]

])
for(const [key,value]  of K)
{
 console.log(key,value)
}

let firstname="mintesnot";
let uniquename ="zente";
[firstname,uniquename]=[uniquename,firstname]//swaping using destructuring
console.log(firstname,uniquename)//zente mintesnot