// Create an Object Collegestudent with :
// Level1 --> course:"BCA"
// Level2 (Inside Details)--> firstname : "Saniya"
//                            lastname : "Kumari"
// Level3 (Inside Marks)-->
//         marks : 
//                  subject1 : 85
//                  subject2 : 90

// Then Print : 
//              1.firstname
//              2.lastname
//              3.subject1marks
//              4.subject2marks

const Collegestudent = {
course : "BCA",
Details : {
    firstname : "Saniya",
     lastname : "Kumari"
},
Marks : {
        subject1 : 85,
         subject2 : 90
}
};

console.log(Collegestudent.Details.firstname);
console.log(Collegestudent.Details.lastname);
console.log(Collegestudent.Marks.subject1);
console.log(Collegestudent.Marks.subject2);