// Here is where you will write your bill splitter code

//let bill = 100;
//let tipPercentage = 20;
//let numGuests = 4;
//let tipAmount = bill * (tipPercentage / 100);
//let totalBill = bill + tipAmount;
//let billPerPerson = totalBill / numGuests;
//console.log(`Each person needs to pay $${billPerPerson}`); // Each person needs to pay $30  

let bill = Number(process.argu[2])
let tipPercentage = 20;
let numGuests = 4;
let tipAmount = bill * (tipPercentage / 100);
let totalBill = bill + tipAmount;
let billPerPerson = totalBill / numGuests;
console.log(`Each person needs to pay $${billPerPerson}`)
Number(process.arguv[2])