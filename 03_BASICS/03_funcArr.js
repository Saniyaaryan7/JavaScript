// Function with Array in JS using rest (...)
function calculatecartprice(...num1){    // Collects all passed values into an array called num1
    return num1  // returns the full array of values
}
console.log(calculatecartprice(100,200,300,400));

// --------------------------------------------------------------------------------

// In this function:
// val1 and Val2 will take the first two values
// ...num2 will collect the remaining values into an array
function calculatecart2price(val1,Val2,...num2){
    return num2   // returns only the remaining values after val1 and Val2
}
console.log(calculatecart2price(400,500,600,800,1000));