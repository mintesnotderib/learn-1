let nam="Mintesnot Derib Mintesnot";
console.log(nam.indexOf("Derib"))// 12 return the first apperance of this
console.log(nam.indexOf("dff"))// -1 always return -1 if the string doesnot exist
console.log(nam.lastIndexOf("Mintesnot"))// 16 return the last apperancce position of Mintesnot

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);//start from 15 and go through to the final

console.log(index); // Outputs: 29


text.lastIndexOf("locate", 15);

console.log(index); // starts at the back of 15 and go through to the bigining

console.log(text.search("Please"));//as an indexof search doesn't include the second argument
 
 let text1="mainly the plain is not maintained AIN";
 const myarr=text1.match("ain");
  console.log(myarr,myarr.length);//['ain'] and the length is 1 because the arrary only know the first "ain"
   const myarray=text1.match(/ain/g);//[ 'ain', 'ain', 'ain', 'ain' ] 4
   console.log(myarray,myarray.length)
    const myarray2=text1.match(/ain/gi); //[ 'ain', 'ain', 'ain', 'ain','AIN' ] 5 case insensetive
    console.log(myarray2,myarray2.length)

    let text2 = "cat,Cat,CAT,cat,dog,Dog,cat";
    const mine = [...text2.matchAll(/cat/g)]; // Convert iterator to array
    
    console.log(mine, mine.length);
    /*  the out put
    [
    'cat',
    index: 24,
    input: 'cat,Cat,CAT,cat,dog,Dog,cat',
    groups: undefined
  ]
] 3*/
let text4 = "I love cats. Cats are very easy to love. Cats are very popular."
const iteratro = text4.matchAll(/Cats/gi);
 console.log(Array.from(iteratro)) 

  /*  the out put
    [
    'cat',
    index: 24,
    input: 'cat,Cat,CAT,cat,dog,Dog,cat',
    groups: undefined
  ]
] */  

  let text5="hello this is my kingdom"
  console.log(text5.includes("my"));//true because the "my" word is in  the tet5 otherways returns false
  console.log(text5.includes("my",20));;//return false because the "my" word doesnot exisist starting from the 20 index

   let text6="hello this is my kingdom"
   console.log(text6.startsWith("hello"));//true because the text starts with "hello"
   console.log(text6.startsWith("hello",2));//return false because the text does not start with "hello" starting from the 2 index
   
   let text7="hello this is my kingdom"
   console.log(text7.endsWith("kingdom"));//true because the text ends with "kingdom"
   console.log(text7.endsWith("kingdom",23));//return false because the text does not end with "kingdom" starting from the 23 index
   
  
