const fs = require('fs');

// my own asynchronous function
function adityasReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("/Users/aditya_0105mac/Desktop/100xDevs/a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

adityasReadFile().then(onDone);