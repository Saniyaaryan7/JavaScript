// const tinderuser = new Object()  // Singleton Object
// console.log(tinderuser);

// const tinderuser2 = {}          // Non-Singleton Object
// console.log(tinderuser2);

const tinderuser = {}
tinderuser.id = "4565sdsdf"
tinderuser.name = "Saniya"
tinderuser.isloggedin = false
console.log(tinderuser);

const regularuser = {
    email : "saniya45@gmail.com",
    fullname : {                    // Nested object (level 1)
        userfullname : {              // Nested object (level 2)
            firstname : "Saniya",
            lastname : "Aryan",
        }
    }
}
console.log(regularuser);
console.log(regularuser.fullname);  // Print first level nested object
console.log(regularuser.fullname.userfullname);  // Print second level nested object
console.log(regularuser.fullname.userfullname.firstname);
console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1:"A" , 2:"B"}
const obj2 = {3:"A" , 4:"B"}
const obj3 = {5:"A" , 6:"B"}

const obj4 = Object.assign({},obj1,obj2,obj3)  // Merge objects using Object.assign()
console.log(obj4);

// OR using spread operator

// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);