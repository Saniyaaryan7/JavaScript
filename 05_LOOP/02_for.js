// Print tables from 1 to 10 using nested loops
for(let i=1; i<=10;i++){
console.log(`Table of : ${i}`);

    for(let j=1; j<=10;j++){
        console.log(i+'*'+j+'='+i*j);
    }

 }

//  ------------------------------Array in for loop--------------------------
// Creating an array
 let myArr = ["Flash","Superman","Batman"]
   console.log("Length of this array : ",myArr.length);
    for (let index = 0; index < myArr.length; index++) {
        const element = myArr[index];  // Current array element
        console.log(element);
    }

