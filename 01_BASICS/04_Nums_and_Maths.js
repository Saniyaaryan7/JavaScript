const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));// Format number to one decimal place

const anothernumber = 234.4567
console.log(anothernumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Format number using Indian numbering system (e.g., lakh, crore)
