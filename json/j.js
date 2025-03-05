let text = `{
"employees": [
 {"firstName":"John","lastName":"Doe" },
 {"firstName":"Anna","lastName":"Smith" },
 {"firstName":"Peter","lastName":"Jones" }
]
}`;




const obj=JSON.parse(text);
console.log(obj.employees[0].firstName)

let jsonData = '{"name": "Mintesnot", "age": 22}';
let user = JSON.parse(jsonData); // Converts JSON string to JS object
console.log(user.name); // Output: Mintesnot





