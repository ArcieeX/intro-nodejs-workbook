

  const fs = require("fs");

// Get user input from the command line
const month = process.argv[2];

if (!month) {
  console.log("Please provide a month name.");
 
}

// Read the birthstone data
fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading data file:", err);
   
  }

  const birthstones = JSON.parse(data);
  const birthstone = birthstones[month];

  if (birthstone) {
    console.log(`The birthstone for ${month} is ${birthstone}.`);
  } else {
    console.log("Invalid month. Please enter a valid month name.");
  }
});
