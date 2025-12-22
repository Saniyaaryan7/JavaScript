// Array of numbers
const num = [10,25,15,20,40]

// filter() returns a new array with values >= 20
const result = num.filter((arr) => arr>=20);
console.log(result);

// --------------------------------------------------------

// Combination of filter() and map()

const num2 = [10,25,15,20,40]
// First filter values >= 20, then double them using map()
const result2 = num2
    .filter((arr) => arr>=20)
    .map((arr) => arr*2);
console.log(result2);
