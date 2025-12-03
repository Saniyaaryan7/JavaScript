// Call Stack 

function a(){
    console.log("A");  // Step 1: Execute A
    b();               // Step 2: Call function B
    console.log("A end");  // Step 4: Continue after B finishes
}
function b(){
    console.log("B");    // Step 3: Execute B and return
}
a();
console.log("Program ends");  // Step 5: Program finished