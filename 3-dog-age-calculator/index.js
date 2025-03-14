// Your code will go here!
//- 1 human year -> 15 dog years
//- 2 human years -> 24 dog years
//- 10 human years -> 64 dog years

//Your app will work with a dog's name and age in human years, and return a sentence about their age in dog years. Running `node dog-age-calculator-.js Maisie 3` should output: "Your dog, Maisie, is 3 years old, but that's 29 years old in dog years!"

//Similarly, `node dog-age-calculator.js Ralph 4` will output, "Your dog, Ralph, is 4 years old, but that's 34 years old in dog years!"



let dogName = process.argv[2]; 
let dogAge = Number(process.argv[3]); 

let firstDogYears = 15;
let secondDogYears = 9;
let dogYearsAfterTwo = 5;
let humanAge;

if (dogAge === 1) {
    humanAge = firstDogYears;
} else if (dogAge === 2) {
    humanAge = firstDogYears + secondDogYears;
} else {
    humanAge = firstDogYears + secondDogYears + (dogAge - 2) * dogYearsAfterTwo;
}

console.log(`Your dog, ${dogName}, is ${dogAge} years old, but that's ${humanAge} years old in dog years!`);
