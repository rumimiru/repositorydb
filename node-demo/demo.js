const fs = require('fs');

const content = "Hello! This file was created using Node.js.";

fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created successfully: message.txt");
  }
});
