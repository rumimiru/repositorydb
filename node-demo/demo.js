// Import File System module
const fs = require('fs');

// Define content
const content = "Hello! This file was created using Node.js.";

// Write to file
fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created successfully: message.txt");
  }
});
