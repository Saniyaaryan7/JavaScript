// Method using parent object values
 
const user = {
    name : "Saniya",
    age : 21,
    intro : function(){return`My name is ${this.name} and I am ${this.age} years old.`;}
};
console.log(user.intro());