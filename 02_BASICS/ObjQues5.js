// Create an object student with:
// firstname = "Saniya"
// lastname = "Aryan"
// Education :
        // course : "BCA"
        // year : 2025

const student ={
    firstname : "Saniya",
    lastname : "Aryan",
    Education : {
        course : "BCA",
        year : 2025,
       intro : function(){return`${student.firstname}${student.lastname} is studing ${this.course} in ${this.year}`;}

}
    };
    console.log(student.Education.intro());
    