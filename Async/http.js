const fs = require('fs');

function myDisplayer(content) {
  console.log(content); // Display output in the terminal
}

function getFile(myCallback) {
  fs.readFile("Array/sort.js", "utf8", (err, data) => {
    if (err) {
      myCallback("Error: " + err.message);
    } else {
      myCallback(data);
    }
  });
}

getFile(myDisplayer);

 fd = require('fs').promises

// Function to display content (simulating `document.getElementById`)
function myDisplayer(content) {
  console.log(content); // In Node.js, we print to the console
}

// Create a Promise to read the file
let myPromise = new Promise((resolve, reject) => {
  fd.readFile("mycar.html", "utf8")
    .then(data => resolve(data)) // Resolve with file content
    .catch(() => reject("File not Found")); // Reject if file doesn't exist
});

// Handle the Promise
myPromise.then(
  value => myDisplayer(value),  // If successful, display file content
  error => myDisplayer(error)   // If an error occurs, display the error message
);

