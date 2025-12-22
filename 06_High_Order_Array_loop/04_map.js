// Original array of numbers
const num = [1, 2, 3, 4, 5];

// map() creates a NEW array by multiplying each value by 2
const result = num.map((nums) => {
    return nums * 2;   // return is mandatory inside curly braces
});

console.log(result);  // [2, 4, 6, 8, 10]

// ---------------------------------------------------

// Another array of numbers
const arr = [5, 10, 15];

// map() with implicit return (no curly braces)
const res = arr.map((num) => num + 5);

console.log(res);     // [10, 15, 20]
