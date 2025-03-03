async function myfunction() {
 return "Hello Mintesnot";
}
myfunction().then(function (value) {
 console.log(value), function (eror) {
  console.log(eror)
 }
})

async function myfun() {
 let mypromise = new Promise(function (resolve, reject) {
  resolve("hello guys")
  reject("hh")
 });
 var x = await mypromise;
 console.log(x)
}
myfun()

async function mydisplay() {
 let y = new Promise(function (res, rej) {
  setTimeout(function () {
   res("we did it");
  }, 4000)
 })
  x=await y;
  console.log(x);
}
mydisplay()