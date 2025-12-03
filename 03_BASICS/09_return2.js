// Function to compare a number with 5
function calc(num) {

    // If number is greater than 5, return "Greater"
    if (num > 5) {
        return "Greater";   // Function stops here
    }

    console.log("This will run");  // Runs only when num <= 5

    // Returned when the number is NOT greater than 5
    return "Smaller";
}

// Calling calc() with values greater and smaller than 5
console.log(calc(10));  // Output: Greater
console.log(calc(3));   // Output: Smaller + logs "This will run"
