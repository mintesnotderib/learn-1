

let myPromise = new Promise(function (myResolve, myReject) {
 let x = 0;
 if (x === 0)
  myResolve(" it is zero ")
 else
  myReject(" it is not zero ")

});
myPromise.then(
 function (value) { console.log(value) },
 function (eror) { console.log(eror) }
)
console.log(myPromise)
let myNewPromise = new Promise(function (myRes, myRej) {
 setTimeout(function () { myRes(" I Love You ") }, 2000)
}

);
myNewPromise.then(
 function (value) {
  console.log(value)
 }

)


let zentepromise=new Promise(function(trust,liar){
 let word=true;
 if(word){
  trust("Mintesnot is a trusted man")
 }
 else{
  liar("Mintesnot is a liar man")
 }
})
zentepromise.then(
 function(goodresult){console.log(goodresult)},
 function(badresult){console.log(badresult)}
)