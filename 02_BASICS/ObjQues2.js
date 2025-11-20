// Create an Object called Student:
     // firstname : "Saniya"
    // lastname : "Aryan"
   // course : "MCA"

// * Then do : 
    // Print firstname using dot notation
    // Print course using bracket notation
    // Update lastname to "Kumari" and print it

    const student = {
        firstname : "Saniya",
        lastname : "Aryan",
        course: "MCA"
    }
    console.log(student.firstname);    // Print firstname using dot notation
    console.log(student["course"]);    // Print course using bracket notation

    student.lastname = "Kumari";     // Update lastname to "Kumari" and print it
    console.log(student.lastname);
