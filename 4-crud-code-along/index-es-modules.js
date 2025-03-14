// Create a module that accesses the file system and uses ES modules
const moment = require("moment");

const year = process.argv[2]; // Get year from command line

if (!year || isNaN(year)) {
    console.log("Please provide a valid year as an argument.");
    process.exit(1);
}

const isLeap = moment([year]).isLeapYear();

console.log(`The year ${year} ${isLeap ? "is" : "is not"} a leap year.`);

import { printOneBook } from "./index-common-js.js";


const fs = require("fs");

const action = process.argv[2];


//This function prints a single book from the data.json file.
function printOneBook(num) {
  fs.readFile("./data.json", "utf8", (data) => {
    const books = JSON.parse(data);
    for (let i = 0; i < books.length; i++) {
      if (i == Number(num)) {
        console.log(books[i].title + "/n");
        console.log(books[i].text + "/n");
      }
    }
  });
}

//This is a conditional statement that checks the value of the action variable.
if (action === "getAll") {
  printAllBooks();
} else if (action === "getOne") {
  printOneBook(process.argv[3]);
} else {
    console.log("There was an error!");
  }