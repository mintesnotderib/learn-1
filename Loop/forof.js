const person = ["alemu", "abebe", "debebe"]
for (let x of person)//best for array
{
 console.log(x);
}
for (let y of person[0])//looping over the string
{
 console.log(y);
}

console.log(Boolean(person[3]))

/*a
l
e
m
u */