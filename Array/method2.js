const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);//start at 2 cancel 0 elements    [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

fruits.splice(4, 1, "Pineapple");// start at 4 cancel 1 add pineapple
 console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Pineapple', 'Mango' ]

 const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1)// the same to splice but in here create a new array
 console.log(spliced); // [ 'Feb', 'Mar', 'Apr' ]