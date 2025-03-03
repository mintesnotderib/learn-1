const x=()=>{console.log(" I Called After 3 Seconds");}
setTimeout(x,3000)

setTimeout(function(){//ananomuos function that means there is no name
 myfunction(" I Love You Too!!!")
},3000)
function myfunction(x){
 console.log(x)

}
console.log("Hello World")

function time(){
 let d=new Date();

 let hours = String(d.getHours()).padStart(2, "0");
    let minutes = String(d.getMinutes()).padStart(2, "0");
    let seconds = String(d.getSeconds()).padStart(2, "0");

    let x = `${hours}:${minutes}:${seconds}`
 process.stdout.write(`\r${x}`); // Overwrite previous output
}
setInterval(time,1000)

