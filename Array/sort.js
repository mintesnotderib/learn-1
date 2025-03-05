const family=["Solomon","Mintesnot","Birtukan","Getachew","Birhanu","Dereje","Yohannis","Meseret"]

console.log(family.sort())// Sorting the family array in alphabetical order

console.log(family.reverse())// Reversing the family 
console.log(family)//already change the family

const memebers=family.toSorted()//the same to sort but in this create new array
console.log(memebers)

const reversemembers=family.toReversed()//the same to reverse but in this create new array 
                   
console.log(reversemembers)

 const x=[54,89,22,100,999,1,43]
  console.log(x.sort())//1,100,22,43,54,89,999
   console.log(x.sort(function(a,b){return a-b;}))// 1,  22,  43, 54, 89, 100, 999
    console.log(x.sort(function(a,b){return b-a;}))//999,100,89,54,43,22,1

    // Node.js version of Fisher-Yates shuffle

const points = [40, 100, 1, 5, 25, 10];

console.log("Original Array:", points);

function shuffleArray() {
  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));  // Random index between 0 and i
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
}

shuffleArray();
console.log("randomed Array:", points);
for(let i=0; i<points.length; i++) {
  console.log(points[i]);}

   const p=[3,2,5,1,5];
    function arr(p)
    {
      return Math.min.apply(null,p);
    }
     console.log(arr(p))//return 1 or the min value in the array
     /*Math.max.apply(null, [1, 2, 3])  is equivalent to Math.max(1, 2, 3). */
     console.log(Math.max(...[1, 2, 3]))//return 3

     const q=[3,2,5,1,5];
     let min=q[0],len=q.length;
     console.log(len)
     function arr2(){
      for(let h=0;h<len;h++){
        if(q[h]<min){
          min=q[h];
        }
       
      }
      console.log(min);
    }
    arr2()

    const r=[

     {name: "Alice", age: 25},
     {name: "Bob", age: 30},
     {name: "Charlie", age: 28}
    ];
     r.sort(function z(a,b){//sort by age
       return a.age -b.age;
     })
     console.log(r)
      r.sort(function z(a,b){//sort by name
       if(a.name >b.name)
      return 1
      if(a.name < b.name)
      return -1}
     )
     console.log(r)
    

  