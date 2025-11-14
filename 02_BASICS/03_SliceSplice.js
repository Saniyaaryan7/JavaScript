myArr = [2,4,6,8,10]
console.log("A",myArr);

const myArr2 = myArr.slice(1,3)  // slice(): returns part of the array from index 1 to 2 (3 is not included)
console.log("B",myArr2);

const myArr3 = myArr.splice(1,3)  //splice(): removes 3 elements starting from index 1 
console.log("C",myArr);
