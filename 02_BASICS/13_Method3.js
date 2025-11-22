// Method inside a Nested object

const user = {
    name : "Saniya",
    details : {
        age : 21,
        course : "BCA",
        intro : function(){
            return`I am ${user.name} and ${this.age} years old and I study ${this.course}`;
        }
    }
};
console.log(user.details.intro());