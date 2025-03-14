// Create a program that checks to see if the current year is leap year using the Moment module.

const moment = require("moment");





// // Get the current year
// const currentYear = moment().year();

// // Check if it's a leap year
// const isLeapYear = moment([currentYear]).isLeapYear();

// console.log(`The year ${currentYear} ${isLeapYear} is a leap year.`);


const year = process.argv[2]; // Get year from command line
const isLeapYear = moment([year]).isLeapYear();

if (isLeapYear === true) {
    console.log(`The year ${year} is a leap year.`);
} else {
    console.log(`The year ${year} is not a leap year.`);
}
