// Loop using break → stops the loop completely when condition is met
for (let index = 0; index <= 20; index++) {
   if(index==5){
    console.log("Detected 5")
    break    // Exit the loop
   }
    console.log(`Value of i ${index}`);
}

for (let index = 0; index <= 20; index++) {
   if(index==5){
    console.log("Detected 5")
    continue
   }
    console.log(`Value of i ${index}`);
}

