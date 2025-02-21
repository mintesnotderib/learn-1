let text="Hello";//possible
let text2='hello';//possible
 
text="i'm mintesnot"//possiible quotes inside different quotes
console.log(text)
text='i am "mintesnot"'//possiible quotes inside different quotes
console.log(text)
//text=i'm "mintesnot" is not possiible
text=`i'm "mintesnot"`//possiible quotes inside different quotes

console.log(text)
console.log(text.length) //15 including single and double quotes

//text="here this is "mintesnot" derib" we can't do this
text="here this is \"mintesnot\" derib"//possible 
console.log(text)
//text='here this is 'mintesnot' we can not do it
text='here this is \'mintesnot\'';//possible 
console.log(text)
text="here this is \ a backslash"//possible  but the bacslash is not seen here
console.log(text)
text="here this is \\ a backslash"//possible and the bacslash is  seen here
console.log(text)
/*text="lorem
 ipsum dolor sit amet, consectetur
 adipiscing elit. Sed vulputate, 
 sem a fringilla lobortis, justo nunc scelerisque ex"    *///we can do it instead for long string we must use the template opreator
 text=`lorem
 ipsum dolor sit amet, consectetur
 adipiscing elit. Sed vulputate, 
 sem a fringilla lobortis, justo nunc scelerisque ex`
 console.log(text)

 let text3=new String("john")//we can but it is not safe way
 console.log(text3)

 console.log(5==='5')//false because "===" compare the value and type 
 console.log(5=='5')//true because "==" compare the value only
