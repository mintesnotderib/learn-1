const mynumbers={}
mynumbers[Symbol.iterator] = function(){ 
  let  i=0;
  return{
     next()
     {
      let done=false;
      if(i>100)
       done=true;
      
      i+=10;
      return {value:i ,done:done};
     
     }
   };
};
 for(const x of mynumbers)
 {
   console.log(x)
 }