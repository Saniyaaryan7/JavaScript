// Object with user details
const user = {
    name: "Saniya",
    age: 21,
    course: "BCA"
};

// for...in loop to iterate over object keys
for (let key in user) {
    console.log(key, user[key]);   // Prints key and its value
}

// ------------------------------------------------------------

// Array of values
const arr = ["A", "B", "C", "D"];

// for...in loop on array - iterates over index numbers
for (let array in arr) {
    console.log(array, arr[array]);   // Prints index and corresponding value
}
