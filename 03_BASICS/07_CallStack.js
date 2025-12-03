// Call Stack 

function a(){
    console.log("A");
    b();
    console.log("A end");
}
function b(){
    console.log("B");
}
a();
console.log("Program ends");