let text="Mintesnot Derib";
 console.log(text.charAt(0));//M is the output but not starrt at the end or can not use negative indices
 console.log(text.at(0),text.at(-1))//we can use negatiive return M b   and this is the best way
 console.log(text.charCodeAt(0))//return Ascii value of M
 console.log(text[0]);//it works but it is n't apropriate way

let str = "JavaScript";
console.log(str.substring(4, 10)); // "Script"
console.log(str.substring(10, 4)); // "Script" (order swapped)
console.log(str.substring(4));     // "Script" (from index 4 to end)
console.log(str.substring(-5, 4)); // "Java" (negative treated as 0)


 console.log(str.slice(4, 10));  // "Script"
 console.log(str.slice(10, 4));  // "" (empty, order matters)
 console.log(str.slice(4));      // "Script" (from index 4 to end)
 console.log(str.slice(-6, -1)); // "Scrip" (negative index)
 
 
console.log(str.substr(4, 6));  // "Script"//it doesnot work
console.log(str.substr(-6, 5)); // "Scrip" (negative starts from end)

let txt="mintesnot";
console.log(txt.toUpperCase(),txt.toLowerCase())
 let conc="hello".concat("","world")

console.log(conc);

let nam="  mintesnot derib     ";
 console.log(nam.trim());//trim(remove) spaces from the start and end
 console.log(nam.trimStart());//trim spaces from the start
 console.log(nam.trimEnd());//trim spaces from the end

 let x="5"
 console.log(x.padStart(4,"0"))// 0005 padStart(length,"value") up to length 4(0,1,2) fill 0 before 5
 let u=2;
 let na=u.toString();
 console.log(na.padStart(4,"0"))// 0002 padStart(length,"value") up to length 4(0,1,2) fill 0 before 2
 console.log(na.padEnd(4,"0"))// 2000 padEnd(length,"value") start at the end

  let me="Zente";
  console.log(me.repeat(3))//ZenteZenteZente repeat(times)

  let text1="Zente Derib";
  function place(){
    text1=text1.replace("Zente","Mintesnot")//replace zente by mintesnot and the function return Mintesnot Derib case sensetive
     return text1;
  }
  console.log(place())

   let text2="newyork city";
   console.log(text2.replace(/CITY/i,"Town"));// newyork Town we must use this code to remove the behaviour of case sensetiveness /" "/i
     let text3="the good city is neywork city";
      console.log(text3.replace(/city/g,"Town"));// the good Town is neywork Town we must use /" "/g when the word is above one times

       let  text4=`i love dog always and also my brother
       alawys love dog i think Dog is loved by all famiy`
        console.log(text4.replaceAll("dog","Dogs"));//simple way but the same as (text4.replace(/dog/g,"Dogs")

       let text5="a,b,c,d,e,f";
        const myArrays=text5.split(",");//now we create myarrays an array
        console.log(myArrays[3]);//d
         const newarrays=text5.split("")// now we create an array but now the comma also an array element
          console.log(newarrays[1]);//, is the out put